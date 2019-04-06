class PagesController < ApplicationController
    def home
    end

    def thanks
        @signups = Signup.order(created_at: :desc).all
    end
end
