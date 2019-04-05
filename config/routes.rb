Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  resources :signups
  root 'pages#home'
  get "pages/home" => "pages#home"
  get 'about' => 'about#index'
  get 'signup' => 'signups#new'
  get 'pages/thanks' => 'pages#thanks'
end
