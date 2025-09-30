import { createClient } from "@/lib/supabase/server"

export async function GET() {
  try {
    const supabase = await createClient()

    // Create chat_messages table
    const { error: tableError } = await supabase.rpc("exec_sql", {
      sql: `
        create table if not exists public.chat_messages (
          id uuid primary key default gen_random_uuid(),
          session_id uuid not null,
          message text not null,
          role text not null check (role in ('user', 'assistant')),
          created_at timestamp with time zone default now()
        );

        create index if not exists chat_messages_session_id_idx on public.chat_messages(session_id);
        create index if not exists chat_messages_created_at_idx on public.chat_messages(created_at desc);

        alter table public.chat_messages enable row level security;
      `,
    })

    if (tableError) {
      // If rpc doesn't work, try direct table creation
      const { error: createError } = await supabase.from("chat_messages").select("id").limit(1)

      if (createError && createError.code === "42P01") {
        return Response.json(
          {
            success: false,
            message: "Please run the SQL script manually in Supabase dashboard",
            error: createError.message,
          },
          { status: 500 },
        )
      }
    }

    return Response.json({
      success: true,
      message: "Database setup complete! Chat messages will now be saved.",
    })
  } catch (error) {
    return Response.json(
      {
        success: false,
        message: "Setup failed",
        error: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 },
    )
  }
}
