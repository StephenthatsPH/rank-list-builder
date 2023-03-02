class RanklistsController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response

        # GET /reviews
        def index 
            ranklists = Ranklist.all
            render json: ranklist
        end
    
        # POST /reviews
        def create
            ranklist = Ranklist.create(ranklist_params)
            if ranklist.valid?
                render json: ranklist, status: :created
            else
                render json: error
            end
        end

        private

        def ranklist_params
            params.permit(:program_name, :geographic, :goodfit, :reputation, :personalities, :edu_training, :comment, :user_id)
        end

        def render_not_found_response
            render json: { error: "Review not found" }, status: :not_found
        end
end
