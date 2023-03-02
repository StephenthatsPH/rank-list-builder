class HospitalsController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response

    def index
        hospitals = Hospital.all
        render json: hospitals
    end

    def create
        hospital = Hospital.create(hospital_params)
        render json: hospital, status: :created
    end

    def show
        hospital = find_hospital
        if hospital
            render json: hospital
        else
            render_not_found_response
        end
    end

    private

    def find_hospital
        hospital.find(params[:id])
    end

    def render_not_found_response 
        render json: { error: "Hospital not found" }, status: :not_found
    end
end
