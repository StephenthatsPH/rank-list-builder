class RanklistsController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response

    # GET /ranklists
    def index 
        ranklists = Ranklist.all
        render json: ranklist
    end

    # POST /ranklists
    def create
        ranklist = Ranklist.create(ranklist_params)
        render json: ranklist, status: :created
    end

    # GET /ranklists/:id shows specific ranklist
    def show 
        ranklist = find_ranklist
        if ranklist
            render json: ranklist 
        else
            render_not_found_response
        end
    end

    # DELETE /ranklist/:id
    def destroy
        ranklist = find_ranklist
        if ranklist
            ranklist.destroy
            head :no_content
        else
            render json: { errors: 'Ranklist not found' }, status: :not_found
        end
    end

        private

        def find_ranklist
            Ranklist.find(params[:id])
        end

        def ranklist_params
            params.permit(:id, :program_name, :geographic, :goodfit, :reputation, :personalities, :qol, :edu_training, :comment, :user_id)
        end

        def render_not_found_response
            render json: { error: "Review not found" }, status: :not_found
        end
end
