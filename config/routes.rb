Rails.application.routes.draw do
  devise_for :users
  resources :dogs
  resources :pages

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root 'pages#index'

  get 'puppies'=> 'pages#puppies'
  get 'kennel'=> 'pages#kennel'
  get 'our_dogs'=> 'pages#our_dogs'
  get 'about'=> 'pages#about'
  get 'careers'=> 'pages#careers'

  get 'training'=>  'pages#training'
  get 'obedience'=> 'pages#obedience'
  get 'retriever'=> 'pages#retriever'


end
