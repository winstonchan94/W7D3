class Api::PokemonController < ApplicationController
  def index
    @pokemons = Pokemon.all
    render :index
  end

  def show
    @pokemon = Pokemon.find(params[:id])
    render :show
  end

  def create
    @pokemon = Pokemon.new(pokemon_params)
    debugger
    if @pokemon.save
      render json: @pokemon
    else
      render json: @pokemon.errors.full_messages
    end
  end

  private
  def pokemon_params
    params.require(:pokemon).
    permit(:name, :poke_type, :attack, :defense, :image_url, moves: [])
  end
end
