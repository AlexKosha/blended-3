import { Container, CountryList, Heading, Loader, Section } from 'components';
import { useEffect, useState } from 'react';
import { getCountries } from 'service/country-service';

export const Home = () => {
  const [country, setCountry] = useState(null);
  const [error, setError] = useState('');
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    const country = async () => {
      setLoader(true);
      try {
        const nameCoutries = await getCountries();
        setCountry(nameCoutries);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoader(false);
      }
    };

    country();
  }, []);

  return (
    <Section>
      <Container>
        {country && <CountryList countries={country} />}
        {error && <Heading>{error}</Heading>}
        {loader && <Loader />}
      </Container>
    </Section>
  );
};
