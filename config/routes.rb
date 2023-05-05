Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"

  #get '/hello', to: 'application#hello_world'

  # get '*path',
  #     to: 'fallback#index',
  #     constraints: ->(req) { !req.xhr? && req.format.html? }

  get '/users', to: 'users#index'
  get '/me', to: 'users#show'
  get '/lists', to: 'lists#index'
  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy'

end
