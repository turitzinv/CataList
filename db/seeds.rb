puts "🌱 Seeding..."

User.create(username: "VictorT", password: "VictorT123")

List.create(
  header: "Packing List",
  user_id: 1
)

Item.create(point: "Toothbrush", list_id: 1)

puts "✅ Done seeding!"