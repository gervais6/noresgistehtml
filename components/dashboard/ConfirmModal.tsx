import React from 'react';

interface ConfirmModalProps {
  show: boolean;
  pendingData: any;
  onConfirm: () => void;
  onCancel: () => void;
}

export default function ConfirmModal({
  show,
  pendingData,
  onConfirm,
  onCancel,
}: ConfirmModalProps) {
  if (!show || !pendingData) return null;

  return (
    <div className="fixed inset-0 z-[1200] bg-black/70 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-surface-container border border-gray-200 dark:border-white/10 rounded-2xl max-w-md w-full p-6 shadow-2xl space-y-4 text-left" onClick={(e) => e.stopPropagation()}>
        <div className="flex justify-between items-center pb-3 border-b border-gray-200 dark:border-white/10">
          <h3 className="text-lg font-bold text-gray-900 dark:text-white">Vérification des données</h3>
          <button onClick={onCancel} className="cursor-pointer text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-white transition-colors">
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>
        <div className="space-y-3 py-1 text-left">
          <div className="flex items-center space-x-3">
            <div className="w-28 shrink-0 text-sm font-semibold text-gray-500 dark:text-gray-400">Nom :</div>
            <div className="text-sm font-medium text-gray-900 dark:text-white">{pendingData.nom || '-'}</div>
          </div>
          <div className="flex items-center space-x-3">
            <div className="w-28 shrink-0 text-sm font-semibold text-gray-500 dark:text-gray-400">Prénom :</div>
            <div className="text-sm font-medium text-gray-900 dark:text-white">{pendingData.prenom || '-'}</div>
          </div>
          <div className="flex items-center space-x-3">
            <div className="w-28 shrink-0 text-sm font-semibold text-gray-500 dark:text-gray-400">NIN :</div>
            <div className="text-sm font-mono font-medium text-gray-900 dark:text-white">{pendingData.numeroPiece || '-'}</div>
          </div>
          <div className="flex items-center space-x-3">
            <div className="w-28 shrink-0 text-sm font-semibold text-gray-500 dark:text-gray-400">Date naiss. :</div>
            <div className="text-sm font-medium text-gray-900 dark:text-white">
              {pendingData.dateNaissance ? 
                (pendingData.dateNaissance.includes('-') ? 
                  pendingData.dateNaissance.split('-').reverse().join('/') : 
                  pendingData.dateNaissance) : 
                '-'
              }
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <div className="w-28 shrink-0 text-sm font-semibold text-gray-500 dark:text-gray-400">Sexe :</div>
            <div className="text-sm font-medium text-gray-900 dark:text-white">{pendingData.sexe || '-'}</div>
          </div>
          <div className="flex items-center space-x-3">
            <div className="w-28 shrink-0 text-sm font-semibold text-gray-500 dark:text-gray-400">Taille :</div>
            <div className="text-sm font-medium text-gray-900 dark:text-white">{pendingData.taille ? `${pendingData.taille} cm` : '-'}</div>
          </div>
          <div className="flex items-center space-x-3">
            <div className="w-28 shrink-0 text-sm font-semibold text-gray-500 dark:text-gray-400">Type pièce :</div>
            <div className="text-sm font-medium text-gray-900 dark:text-white">{pendingData.typePiece || '-'}</div>
          </div>
          <div className="flex items-center space-x-3">
            <div className="w-28 shrink-0 text-sm font-semibold text-gray-500 dark:text-gray-400">Lieu naiss. :</div>
            <div className="text-sm font-medium text-gray-900 dark:text-white">{pendingData.lieuNaissance || '-'}</div>
          </div>
          <div className="flex items-center space-x-3">
            <div className="w-28 shrink-0 text-sm font-semibold text-gray-500 dark:text-gray-400">Adresse :</div>
            <div className="text-sm font-medium text-gray-900 dark:text-white">{pendingData.adresseDomicile || '-'}</div>
          </div>
          <div className="flex items-center space-x-3">
            <div className="w-28 shrink-0 text-sm font-semibold text-gray-500 dark:text-gray-400">Délivrance :</div>
            <div className="text-sm font-medium text-gray-900 dark:text-white">
              {pendingData.dateDelivrance ?
                (pendingData.dateDelivrance.includes('-') ?
                  pendingData.dateDelivrance.split('-').reverse().join('/') :
                  pendingData.dateDelivrance) :
                '-'
              }
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <div className="w-28 shrink-0 text-sm font-semibold text-gray-500 dark:text-gray-400">Expiration :</div>
            <div className="text-sm font-medium text-gray-900 dark:text-white">
              {pendingData.dateExpiration ?
                (pendingData.dateExpiration.includes('-') ?
                  pendingData.dateExpiration.split('-').reverse().join('/') :
                  pendingData.dateExpiration) :
                '-'
              }
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <div className="w-28 shrink-0 text-sm font-semibold text-gray-500 dark:text-gray-400">Centre :</div>
            <div className="text-sm font-medium text-gray-900 dark:text-white">{pendingData.centreEnregistrement || '-'}</div>
          </div>
          {pendingData.profession && (
            <div className="flex items-center space-x-3">
              <div className="w-28 shrink-0 text-sm font-semibold text-gray-500 dark:text-gray-400">Profession :</div>
              <div className="text-sm font-medium text-gray-900 dark:text-white">{pendingData.profession}</div>
            </div>
          )}
        </div>
        <div className="pt-3 border-t border-gray-200 dark:border-white/10 flex justify-between items-center">
          <button 
            onClick={onCancel}
            className="px-4 py-2 bg-red-500/20 text-red-400 hover:bg-red-500/30 rounded-xl font-semibold text-sm cursor-pointer transition-all"
          >
            Annuler
          </button>
          <button 
            onClick={onConfirm}
            className="px-4 py-2 bg-primary text-black rounded-xl font-bold text-sm hover:brightness-110 active:scale-[0.98] transition-all cursor-pointer shadow-md"
          >
            Confirmer l'enregistrement
          </button>
        </div>
      </div>
    </div>
  );
}
