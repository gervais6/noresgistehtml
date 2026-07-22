import React from 'react';

interface Visitor {
  _id?: string;
  nom: string;
  prenom: string;
  numeroPiece?: string;
  typePiece?: string;
  sexe?: string;
  taille?: number;
  dateNaissance?: string;
  lieuNaissance?: string;
  dateDelivrance?: string;
  dateExpiration?: string;
  centreEnregistrement?: string;
  adresseDomicile?: string;
}

interface Visit {
  _id: string;
  heureEntree: string;
  heureSortie?: string;
  statut: string;
  service?: string;
  visiteurId: Visitor;
}

interface HistoryDetailModalProps {
  show: boolean;
  selectedVisit: Visit | null;
  onClose: () => void;
}

const formatDate = (value?: string) => {
  if (!value) return '-';
  const d = new Date(value);
  if (isNaN(d.getTime())) return value;
  return d.toLocaleDateString('fr-FR');
};

export default function HistoryDetailModal({
  show,
  selectedVisit,
  onClose,
}: HistoryDetailModalProps) {
  if (!show || !selectedVisit) return null;

  const vis = selectedVisit.visiteurId || { prenom: '', nom: '', numeroPiece: '' };
  const isPresent = selectedVisit.statut === 'EN_COURS' || (!selectedVisit.heureSortie && selectedVisit.statut !== 'SORTI');

  return (
    <div className="fixed inset-0 z-[1000] bg-black/70 backdrop-blur-sm flex items-center justify-center p-4" onClick={onClose}>
      <div className="bg-surface-container border border-gray-200 dark:border-white/10 rounded-2xl max-w-md md:max-w-2xl w-full max-h-[85vh] overflow-y-auto p-6 shadow-2xl space-y-4 text-left" onClick={(e) => e.stopPropagation()}>
        <div className="flex justify-between items-center pb-3 border-b border-gray-200 dark:border-white/10 sticky -top-6 -mt-6 pt-6 bg-surface-container">
          <h3 className="text-lg font-bold text-gray-900 dark:text-white">Fiche du visiteur</h3>
          <button onClick={onClose} className="cursor-pointer text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-white transition-colors">
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-3 py-1 text-left">
          <div className="flex items-center space-x-3">
            <div className="w-28 shrink-0 text-sm font-semibold text-gray-500 dark:text-gray-400">Visiteur :</div>
            <div className="text-sm font-medium text-gray-900 dark:text-white">
              {(vis.prenom || '') + ' ' + (vis.nom || '')}
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <div className="w-28 shrink-0 text-sm font-semibold text-gray-500 dark:text-gray-400">NIN :</div>
            <div className="text-sm font-mono font-medium text-gray-900 dark:text-white">{vis.numeroPiece || '-'}</div>
          </div>
          <div className="flex items-center space-x-3">
            <div className="w-28 shrink-0 text-sm font-semibold text-gray-500 dark:text-gray-400">Type pièce :</div>
            <div className="text-sm font-medium text-gray-900 dark:text-white">{vis.typePiece || '-'}</div>
          </div>
          <div className="flex items-center space-x-3">
            <div className="w-28 shrink-0 text-sm font-semibold text-gray-500 dark:text-gray-400">Sexe :</div>
            <div className="text-sm font-medium text-gray-900 dark:text-white">{vis.sexe || '-'}</div>
          </div>
          <div className="flex items-center space-x-3">
            <div className="w-28 shrink-0 text-sm font-semibold text-gray-500 dark:text-gray-400">Taille :</div>
            <div className="text-sm font-medium text-gray-900 dark:text-white">{vis.taille ? `${vis.taille} cm` : '-'}</div>
          </div>
          <div className="flex items-center space-x-3">
            <div className="w-28 shrink-0 text-sm font-semibold text-gray-500 dark:text-gray-400">Date naiss. :</div>
            <div className="text-sm font-medium text-gray-900 dark:text-white">{formatDate(vis.dateNaissance)}</div>
          </div>
          <div className="flex items-center space-x-3">
            <div className="w-28 shrink-0 text-sm font-semibold text-gray-500 dark:text-gray-400">Lieu naiss. :</div>
            <div className="text-sm font-medium text-gray-900 dark:text-white">{vis.lieuNaissance || '-'}</div>
          </div>
          <div className="flex items-center space-x-3">
            <div className="w-28 shrink-0 text-sm font-semibold text-gray-500 dark:text-gray-400">Adresse :</div>
            <div className="text-sm font-medium text-gray-900 dark:text-white">{vis.adresseDomicile || '-'}</div>
          </div>
          <div className="flex items-center space-x-3">
            <div className="w-28 shrink-0 text-sm font-semibold text-gray-500 dark:text-gray-400">Délivrance :</div>
            <div className="text-sm font-medium text-gray-900 dark:text-white">{formatDate(vis.dateDelivrance)}</div>
          </div>
          <div className="flex items-center space-x-3">
            <div className="w-28 shrink-0 text-sm font-semibold text-gray-500 dark:text-gray-400">Expiration :</div>
            <div className="text-sm font-medium text-gray-900 dark:text-white">{formatDate(vis.dateExpiration)}</div>
          </div>
          <div className="flex items-center space-x-3">
            <div className="w-28 shrink-0 text-sm font-semibold text-gray-500 dark:text-gray-400">Centre :</div>
            <div className="text-sm font-medium text-gray-900 dark:text-white">{vis.centreEnregistrement || '-'}</div>
          </div>
          <div className="flex items-center space-x-3">
            <div className="w-28 shrink-0 text-sm font-semibold text-gray-500 dark:text-gray-400">Service :</div>
            <div className="text-sm font-medium text-gray-900 dark:text-white">{selectedVisit.service || '-'}</div>
          </div>
          <div className="flex items-center space-x-3">
            <div className="w-28 shrink-0 text-sm font-semibold text-gray-500 dark:text-gray-400">Entrée :</div>
            <div className="text-sm font-medium text-gray-900 dark:text-white">{new Date(selectedVisit.heureEntree).toLocaleString()}</div>
          </div>
          <div className="flex items-center space-x-3">
            <div className="w-28 shrink-0 text-sm font-semibold text-gray-500 dark:text-gray-400">Sortie :</div>
            <div className="text-sm font-medium text-gray-900 dark:text-white">
              {selectedVisit.heureSortie ? new Date(selectedVisit.heureSortie).toLocaleString() : 'Présent sur site'}
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <div className="w-28 shrink-0 text-sm font-semibold text-gray-500 dark:text-gray-400">Statut :</div>
            <div>
              <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold ${isPresent ? 'bg-primary/10 text-primary' : 'bg-yellow-500/20 text-yellow-400'}`}>
                {isPresent ? 'En cours' : 'Sorti'}
              </span>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <div className="w-28 shrink-0 text-sm font-semibold text-gray-500 dark:text-gray-400">ID Visiteur :</div>
            <div className="text-xs font-mono text-on-surface-variant break-all">{vis._id || '-'}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
