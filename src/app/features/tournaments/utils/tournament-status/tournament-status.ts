import { TournamentStatus } from '../../models/tournament-status.model';
import { TagVariant } from '../../../../shared/components/tag/tag';

export interface TournamentStatusConfig {
  label: string;
  variant: TagVariant;
}

export const TOURNAMENT_STATUS_CONFIG: Record<
  TournamentStatus,
  TournamentStatusConfig
> = {
  draft: {
    label: 'Brouillon',
    variant: 'secondary',
  },

  upcoming: {
    label: 'Prochain',
    variant: 'warning',
  },

  ongoing: {
    label: 'En cours',
    variant: 'success',
  },

  archived: {
    label: 'Archivé',
    variant: 'secondary',
  },
};