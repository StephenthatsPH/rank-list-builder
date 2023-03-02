class RanklistsController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response

        # GET /reviews
        def index 
            ranklists = Ranklist.all
            render json: ranklist
        end
    
        # POST /reviews
        def create
            ranklist = Ranklist.create()
            render json: ranklist, status: :created
        end

        private

        def render_not_found_response
            render json: { error: "Review not found" }, status: :not_found
        end
end
