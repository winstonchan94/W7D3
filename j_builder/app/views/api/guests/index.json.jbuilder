json.array! @guests do |guest|
  if guest.age >= 40 && guest.age <= 50
    json.partial! partial: 'api/guests/guest', locals: { guest: guest }
  end
end
