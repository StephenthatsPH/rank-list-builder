Rails.application.routes.draw do
  resources :ranklists
  resources :reviews
  resources :users
  resources :programs
  resources :hospitals

  get '*path',
      to: 'fallback#index',
      constraints: ->(req) { !req.xhr? && req.format.html? }
end