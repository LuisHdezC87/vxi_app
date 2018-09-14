Rails.application.routes.draw do
  get 'catch_all/index'
  devise_for :users, :controllers => { :omniauth_callbacks => "users/omniauth_callbacks" }
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: "contacts#new"

  get 'show_people', to: :show_people, controller: 'blogs' 
  get 'show_vxi_gk', to: :show_vxi_gk, controller: 'blogs'
  
  resources :blogs
  resources :contacts

  get '*path', to: 'catch_all#index'
  
end
