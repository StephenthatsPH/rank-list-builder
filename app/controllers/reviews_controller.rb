class ReviewsController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
    skip_before_action :authorize, only: [:index, :show]



    # GET /reviews
    def index 
        reviews = Review.all
        render json: reviews #, include: :programs
    end

    # POST /reviews
    def create
        review = Review.create(review_params)
        render json: review, status: :created
    end

    # DELETE /reviews/:id
    def destroy
        review = find_review
        if review
            review.destroy
            head :no_content
        else
            render json: { errors: 'Review not found' }, status: :not_found
        end
    end

    # Private methods start here
    private

    def find_review
        Review.find(params[:id])
    end

    def review_params
        params.permit(:id, :post, :rating, :program_id, :user_id)
    end

    def render_not_found_response
        render json: { error: "Review not found" }, status: :not_found
    end

end
