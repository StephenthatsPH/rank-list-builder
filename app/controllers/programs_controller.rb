class ProgramsController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response

    # GET /programs
    def index 
        programs = Program.all
        render json: programs
    end

    # POST /programs
    def create 
        program = Program.create(program_params)
        render json: program, status: :created
    end

    # GET /programs/:id shows specific program
    def show 
        program = find_program
        if program
            render json: program 
        else
            render_not_found_response
        end
    end


    private

    def find_program
        Program.find(params[:id])
    end

    def render_not_found_response 
        render json: { error: "Program not found" }, status: :not_found
    end
end
