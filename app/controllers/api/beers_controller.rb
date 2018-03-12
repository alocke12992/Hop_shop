class Api::BeersController < ApplicationController
  before_action :set_beer, only: [:show, :update, :destroy]
  def index
    render json: Beer.all 
  end

  def show
    render json: @beer 
  end

  def create
    beer = Beer.new(beer_params)
    if beer.save 
      render json: beer 
    else 
      render json: beer.errors, status: 422 
    end 
  end

  def update
    if @beer.update(beer_params)
      render json: @begin
    else 
      render json: @beer.erros, status 422 
    end 
  end 

  def destroy
    @beer.destroy
  end

  private 

  def set_beer 
    @beer = Beer.find(params[:id])
  end 

  def beer_params 
    params.require(:beer).permit(:name, :style, :ibu, :abv)
  end 
  
end
