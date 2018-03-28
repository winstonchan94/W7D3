json.extract! @party, :name, :location


json.name @party.name

json.set! :guests do
  json.array! @party.guests do |guest|
    json.extract! guest, :name, :age, :favorite_color
    json.gifts guest.gifts, :title, :description
  end
end
