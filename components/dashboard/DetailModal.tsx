import React from 'react';

interface Visitor {
  _id?: string;
  nom: string;
  prenom: string;
  numeroPiece?: string;
}

interface Visit {
  _id: string;
  heureEntree: string;
  heureSortie?: string;
  statut: string;
  service?: string;
  visiteurId: Visitor;
}

interface DetailModalProps {
  show: boolean;
  selectedVisit: Visit | null;
  onClose: () => void;
  onDeleteVisitor: (visitorId: string) => void;
}

export default function DetailModal({
  show,
  selectedVisit,
  onClose,
  onDeleteVisitor,
}: DetailModalProps) {
  if (!show || !selectedVisit) return null;

  const vis = selectedVisit.visiteurId || { prenom: '', nom: '', numeroPiece: '', _id: '' };
  const isPresent = selectedVisit.statut === 'EN_COURS' || (!selectedVisit.heureSortie && selectedVisit.statut !== 'SORTI');

  return (
    <div className="fixed inset-0 z-[1000] bg-black/70 backdrop-blur-sm flex items-center justify-center p-4" onClick={onClose}>
      <div className="bg-surface-container border border-gray-200 dark:border-white/10 rounded-2xl max-w-md w-full max-h-[85vh] overflow-y-auto p-6 shadow-2xl space-y-4 text-left" onClick={(e) => e.stopPropagation()}>
        <div className="flex justify-between items-center pb-3 border-b border-gray-200 dark:border-white/10">
          <h3 className="text-lg font-bold text-gray-900 dark:text-white">Détails de la visite</h3>
          <button onClick={onClose} className="cursor-pointer text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-white transition-colors">
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>
        <div className="space-y-3 py-1 text-left">
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
        <div className="pt-3 border-t border-gray-200 dark:border-white/10 flex justify-center">
          {vis._id && (
            <button
              onClick={() => onDeleteVisitor(vis._id!)}
              className="px-4 py-2 bg-red-500/20 text-red-400 hover:bg-red-500/30 rounded-xl flex items-center gap-2 font-semibold cursor-pointer text-sm transition-all"
            >
              <span className="material-symbols-outlined text-base">delete_forever</span>
              <span>Supprimer le visiteur</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
