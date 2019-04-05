class SignupsController < ApplicationController
    def new
        
    end

    def create
        @signup = Signup.new(signup_params)

        if @signup.save
            redirect_to pages_thanks_path
        end
    end

    private
    def signup_params
        params.require(:signup).permit(:firstname, :email)
    end
end
