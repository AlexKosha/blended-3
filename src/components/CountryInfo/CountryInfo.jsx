import { useLocation } from 'react-router-dom';

import { GoBackBtn } from 'components';
import {
  CountryWrapper,
  CountryDescription,
  Flag,
  Image,
  CountryTitle,
  CountryCapital,
  CountryDetail,
  Accent,
} from './CountryInfo.styled';

export const CountryInfo = ({
  country: { flag, capital, country, languages = [], population },
}) => {
  const location = useLocation();
  // console.log(location);
  const goBack = location?.state?.from || '/';

  return (
    <>
      <GoBackBtn path={goBack}>Go back</GoBackBtn>

      <CountryWrapper>
        <Flag>
          <Image src={flag} alt={country} />
        </Flag>
        <CountryDescription>
          <CountryCapital>
            Capital: <Accent>{capital}</Accent>
          </CountryCapital>

          <CountryTitle>{country}</CountryTitle>

          <CountryDetail>
            Population: <Accent>{population}</Accent>
          </CountryDetail>

          <CountryDetail>
            Languages: <Accent>{languages.join(', ')}</Accent>
          </CountryDetail>
        </CountryDescription>
      </CountryWrapper>
    </>
  );
};
