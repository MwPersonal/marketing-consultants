import { useTheme } from 'styled-components';

import { FaCarCrash } from 'react-icons/fa';
import { RiFileEditFill } from 'react-icons/ri';
import { TfiMapAlt } from 'react-icons/tfi';

import { Option, OptionDescription, Options, OptionTitle } from './styles';
import CounterNumberCrescent from '../CounterNumberCrescent';

export const ListOptions = () => {
  const theme = useTheme();

  return (
    <Options>
      <Option>
        <RiFileEditFill size={128} color={theme.orange} />
        <OptionTitle>
          + <CounterNumberCrescent duration={5} number={15000} />
        </OptionTitle>
        <OptionDescription>associados</OptionDescription>
      </Option>
      <Option>
        <TfiMapAlt size={128} color={theme.orange} />
        <OptionTitle>
          + <CounterNumberCrescent duration={5} number={20} />
        </OptionTitle>
        <OptionDescription>regionais</OptionDescription>
      </Option>
      <Option>
        <FaCarCrash size={128} color={theme.orange} />
        <OptionTitle>
          + <CounterNumberCrescent duration={5} number={5000} />
        </OptionTitle>
        <OptionDescription>ocorrências atendidas</OptionDescription>
      </Option>
    </Options>
  );
};
