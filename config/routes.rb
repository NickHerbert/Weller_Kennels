Rails.application.routes.draw do
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
  get 'girl_dogs'=> 'pages#girl_dogs'
  get 'boy_dogs'=> 'pages#boy_dogs'

end
