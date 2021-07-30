import React from "react";

//components
import Thumb from "../Thumb";

//Configuration
import { IMAGE_BASE_URL, POSTER_SIZE } from "../../config";

//image
import NoImage from "../../images/no_image.jpg";
//Styles
import { Wrapper, Content, Text } from "./MovieInfo.styles";

const MovieInfo = ({ movie }) => (
  <Wrapper backdrop={movie.backdrop_path}>
    <Content></Content>
  </Wrapper>
);

export default MovieInfo;
