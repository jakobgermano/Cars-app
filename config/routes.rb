Rails.application.routes.draw do
  #name of the nested route
  #cant use driver show action
  
  resources :vehicles 
  resources :drivers


  get "/me", to: "drivers#show"

  post "/signup", to: "drivers#create"
  
  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy'
  
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
