item_ids = (@pokemon.items.map { |item| item.id })

json.pokemon do
  json.extract! @pokemon, :id, :name, :attack, :defense, :moves, :poke_type
  json.image_url asset_path(@pokemon.image_url)
  json.item_ids item_ids
end

json.items do
  @pokemon.items.each do |item|
    json.set! item.id do
      json.extract! item, :id, :name, :pokemon_id, :price, :happiness
      json.image_url asset_path(item.image_url)
    end
  end

  # item_ids.each do |id|
  #   json.set! "#{id}" do
  #     Item.find(id)
  #   end
  # end
end
