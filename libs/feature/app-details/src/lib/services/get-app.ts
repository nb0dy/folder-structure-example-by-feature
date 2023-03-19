import { routes } from '@folder-structure-example-by-feature/shared/utils/routes';

export type TAppType = 'game' | 'multimedia';

export type TApp = {
  id: string;
  name: string;
  icon: string;
  type: TAppType;
  link: string;
};

const availableApps: TApp[] = [
  {
    id: 'hogwartsLegacy',
    name: 'Hogwarts Legacy',
    icon: 'hogwartsLegacy',
    type: 'game',
    link: routes.game.details.url('hogwartsLegacy'),
  },
  {
    id: 'greedFall',
    name: 'Greed Fall',
    icon: 'greedFall',
    type: 'game',
    link: routes.game.details.url('greedFall'),
  },
  {
    id: 'spotify',
    name: 'Spotify',
    icon: 'spotify',
    type: 'multimedia',
    link: routes.multimedia.details.url('spotify'),
  },
  {
    id: 'tvAndVideo',
    name: 'Tv And Video',
    icon: 'tvAndVideo',
    type: 'multimedia',
    link: routes.multimedia.details.url('tvAndVideo'),
  },
];

export function getApp(id: string | undefined): TApp | null {
  if (!id) {
    return null;
  }

  return availableApps.find((app) => app.id === id) || null;
}
