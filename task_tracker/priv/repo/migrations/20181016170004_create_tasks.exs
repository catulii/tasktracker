defmodule TaskTracker.Repo.Migrations.CreateTasks do
  use Ecto.Migration

  def change do
    create table(:tasks) do
      add :title, :string
      add :desc, :text
      add :completed, :boolean, default: false, null: false
      add :assignedUser, :string
      add :timeSpent, :integer

      timestamps()
    end

  end
end
