import logo from './logo.svg'
import logo_icon from './logo_icon.svg'
import facebook_icon from './facebook_icon.svg'
import instagram_icon from './instagram_icon.svg'
import twitter_icon from './twitter_icon.svg'
import star_icon from './star_icon.svg'
import rating_star from './rating_star.svg'
import sample_img_1 from './sample_img_1.png'
import sample_img_2 from './sample_img_2.png'
import profile_img_1 from './profile_img_1.png'
import profile_img_2 from './profile_img_2.png'
import step_icon_1 from './step_icon_1.svg'
import step_icon_2 from './step_icon_2.svg'
import step_icon_3 from './step_icon_3.svg'
import email_icon from './email_icon.svg'
import lock_icon from './lock_icon.svg'
import cross_icon from './cross_icon.svg'
import star_group from './star_group.png'
import credit_star from './credit_star.svg'
import profile_icon from './profile_icon.png'
import h_cinema from './h_cinema.png'
import h_movie from './h_movie.png'
import h_trip from './h_trip.svg'
import h_food from './h_food.svg'
import h_decision from './h_decision.png'
import i_react from './react.svg'
import i_node from './nodejs.svg'
import i_python from './python.svg'
import i_java from './java.svg'
import i_js from './javascript.svg'
import i_mongodb from './mongodb.svg'

export const assets = {
    logo,
    logo_icon,
    facebook_icon,
    instagram_icon,
    twitter_icon,
    star_icon,
    rating_star,
    sample_img_1,
    sample_img_2,
    email_icon,
    lock_icon,
    cross_icon,
    star_group,
    credit_star,
    profile_icon,
    h_cinema,
    h_movie,
    h_food,
    h_trip,
    h_decision,
    i_react,
    i_node,
    i_java,
    i_python,
    i_js,
    i_mongodb
}

export const stepsData = [
    {
      title: 'Foodie Buddy',
      description: 'This Aicision buddy loves good food and everything surrounding it and can help you decide on your next food order/cook meal.',
      icon: h_food,
    },
    {
      title: 'Movie Buddy',
      description: 'Our filmography expert Aicision buddy is trained on all existing movies and series and can help you decide on your next transient',
      icon: h_movie,
    },
    {
      title: 'Trip Buddy',
      description: 'Plan your next weekend trip/visit to a nearby place with our awesome traveller expert at Aicision',
      icon: h_trip,
    },
  ];

export const testimonialsData = [
    {
        image:profile_img_1,
        name:'Donald Jackman',
        role:'Graphic Designer',
        stars:5,
        text:`I've been using bg.removal for nearly two years, primarily for Instagram, and it has been incredibly user-friendly, making my work much easier.`
    },
    {
        image:profile_img_2,
        name:'Richard Nelson',
        role:'Content Creator',
        stars:5,
        text:`I've been using bg.removal for nearly two years, primarily for Instagram, and it has been incredibly user-friendly, making my work much easier.`
    },
    {
        image:profile_img_1,
        name:'Donald Jackman',
        role:' Graphic Designer',
        stars:5,
        text:`I've been using bg.removal for nearly two years, primarily for Instagram, and it has been incredibly user-friendly, making my work much easier.`
    },
]

export const plans = [
    {
      id: 'Basic',
      price: 10,
      credits: 100,
      desc: 'Best for personal use.'
    },
    {
      id: 'Advanced',
      price: 50,
      credits: 500,
      desc: 'Best for business use.'
    },
    {
      id: 'Business',
      price: 250,
      credits: 5000,
      desc: 'Best for enterprise use.'
    },
  ]