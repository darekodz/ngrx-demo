import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Link } from '../store/links.reducer';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const links: Link[] = [
        {
            name: 'onet',
            url: 'http://onet.pl',
            description: 'dasdsadasdasdas a das dsa  sa sa as asd'
        },
        {
            name: 'wp',
            url: 'http://wp.pl',
            description: 'sjfhisdfhisd   siiosd ji iosjhsdio io siio isd jif'
        },
        {
            name: 'interia',
            url: 'http://interia.pl',
            description: 'skjdhfsdjfsd osd oso ijhs joisd ji sdjf dsoj o'
        }
    ];
    return { links };
  }
}
