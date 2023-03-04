class UsersController < ApplicationController
    # skip_before_action :authorized, only: :create
    
    # GET /me
    def show
        user = User.find(session[:user_id])
        render json: user
    end
        
    # POST /signup
    def create
        user = User.new(user_params)
        if user.save
            session[:user_id] = user.id
            render json:  user, status: :created
        else
            render json: { errors: user.errors.full_messages }, status: :unprocessable_entity
        end
    end

    private
    
    def find_user
        User.find(params[:id])
    end

    def user_params
        params.require(:user).permit(:first_name, :last_name, :email, :phone_number)
    end

end