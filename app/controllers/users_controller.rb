class UsersController < ApplicationController

  def index
    users = User.all
    render json: users, include: :lists
  end

  #add create here

  def show
    user = User.find_by(id: session[:user_id])
    if user
      render json: user
    else
      render json: { error: "Not Authorized" }, status: :unauthorized
    end
  end

end
