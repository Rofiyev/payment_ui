import { clients } from '../util/constants';
import { styles } from '../util/styles';
import ClientCard from './ClientCard';

const Clients = () => {
  return (
    <div className={`${styles.flexCenter} my-4`}>
      <div className={`${styles.flexCenter} flex-wrap w-full`}>
        {clients.map(client => (
          <ClientCard key={client.id} logo={client.logo} />
        ))}
      </div>
    </div>
  )
}

export default Clients