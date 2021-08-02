import React, {Component} from 'react';
import Particles from 'react-particles-js';
import Clarifai from 'clarifai';
import Navigation from '../Navigation/Navigation';
import Logo from '../Logo/Logo';
import ImageLinkForm from '../ImageLinkForm/ILform';
import Rank from '../Rank/Rank';
import {Form} from '../Form/Form';
import { keys } from '../../config'
import Face from '../FaceRecog/FaceRecog'

export { 
  React, Component, Particles, Clarifai,
  // these are components created
  Navigation,Logo,ImageLinkForm, Rank, Face, Form, keys
}