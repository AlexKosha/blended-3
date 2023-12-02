import { Section, Container, CountryInfo, Loader } from 'components';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchCountry } from 'service/country-service';

export const Country = () => {
  const [loader, setLoader] = useState(false);
  const [countryName, setCountryName] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const handleCountryByName = async () => {
      setLoader(true);
      try {
        const resultCountryByName = await fetchCountry(id);
        setCountryName(resultCountryByName);
      } catch (error) {
        console.log(error);
      } finally {
        setLoader(false);
      }
    };
    handleCountryByName();
  }, [id]);

  return (
    <Section>
      <Container>
        {loader && <Loader />}
        {countryName && <CountryInfo country={countryName} />}
      </Container>
    </Section>
  );
};
