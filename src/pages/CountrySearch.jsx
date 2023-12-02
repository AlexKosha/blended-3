import {
  Container,
  SearchForm,
  Section,
  Heading,
  Loader,
  CountryList,
} from 'components';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { fetchByRegion } from 'service/country-service';

export const CountrySearch = () => {
  const [countries, setCountries] = useState(null);
  const [error, setError] = useState('');
  const [params, setParams] = useSearchParams();

  useEffect(() => {
    const value = params.get('value');
    if (!value) return;
    const getCountries = async () => {
      const resoltCountry = await fetchByRegion(value);
      try {
        setCountries(resoltCountry);
      } catch (error) {
        setError(error.message);
      }
    };
    getCountries();
  }, [params]);

  const handleFormSubmit = value => {
    setParams({ value });
  };

  return (
    <Section>
      <Container>
        <SearchForm onSubmit={handleFormSubmit} />
        {countries && <CountryList countries={countries} />}
      </Container>
    </Section>
  );
};
