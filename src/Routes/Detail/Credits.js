import React from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';

const Container = styled.div``;
const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Item = styled.span`
  line-height: 23px;
  text-align: center;
`;

const Title = styled.div`
  font-size: 16px;
  font-weight: 600;
  margin-left: 10px;
  margin-bottom: 20px;
  + div {
    margin-bottom: 20px;
  }
`;

const settings = {
  dots: false,
  infinite: false,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 4,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
      },
    },
    {
      breakpoint: 700,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

const StyledSlider = styled(Slider)``;

const CompaineContainer = styled.div``;

const CompanyImage = styled.img`
  width: 120px;
  height: 50px;
  border-radius: 8px;
  padding: 10px;
  background-color: #fff;
`;

const CastContainer = styled.div``;

const CastImage = styled.img`
  width: 120px;
  height: 150px;
  border-radius: 8px;
`;

const Credits = ({ result, credits }) => (
  <>
    {result.production_companies && result.production_companies.length > 0 && (
      <CompaineContainer>
        <Title>제작</Title>
        <StyledSlider {...settings}>
          {result.production_companies.map((company) => (
            <Container key={company.id}>
              <FlexContainer>
                <CompanyImage
                  src={
                    company.logo_path
                      ? `https://image.tmdb.org/t/p/original${company.logo_path}`
                      : require('../../assets/noPosterSmall.png').default
                  }
                />
                <Item>{company.name}</Item>
              </FlexContainer>
            </Container>
          ))}
        </StyledSlider>
      </CompaineContainer>
    )}
    {credits.cast && credits.cast.length > 0 && (
      <CastContainer>
        <Title>출연</Title>
        <StyledSlider {...settings}>
          {credits.cast.map((cast) => (
            <Container key={cast.cast_id ? cast.cast_id : cast.id}>
              <FlexContainer>
                <CastImage
                  src={
                    cast.profile_path
                      ? `https://image.tmdb.org/t/p/original${cast.profile_path}`
                      : require('../../assets/noPosterSmall.png').default
                  }
                />
                <Item>{cast.name}</Item>
                <Item>{cast.character}</Item>
              </FlexContainer>
            </Container>
          ))}
        </StyledSlider>
      </CastContainer>
    )}
  </>
);

export default Credits;
