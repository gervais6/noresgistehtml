import React from 'react';

interface NotificationModalsProps {
  successMsg: string | null;
  setSuccessMsg: (msg: string | null) => void;
  errorMsg: string | null;
  setErrorMsg: (msg: string | null) => void;
}

export default function NotificationModals({
  successMsg,
  setSuccessMsg,
  errorMsg,
  setErrorMsg,
}: NotificationModalsProps) {
  return (
    <>
      {/* Success Notification Modal */}
      {successMsg && (
        <div className="fixed inset-0 z-[1300] bg-black/70 backdrop-blur-sm flex items-center justify-center p-4" onClick={() => setSuccessMsg(null)}>
          <div className="bg-surface-container border border-gray-200 dark:border-white/10 rounded-2xl max-w-sm w-full p-6 shadow-2xl space-y-4 text-center" onClick={(e) => e.stopPropagation()}>
            <div className="flex flex-col items-center">
              <span className="material-symbols-outlined text-primary text-6xl">check_circle</span>
              <h3 className="text-xl font-bold mt-3 text-gray-900 dark:text-white">Succès</h3>
              <p className="text-on-surface-variant mt-2 text-sm">{successMsg}</p>
            </div>
            <div className="pt-2 flex justify-center">
              <button 
                onClick={() => setSuccessMsg(null)}
                className="px-5 py-2 bg-primary/20 text-primary hover:bg-primary/30 rounded-xl font-semibold text-sm cursor-pointer transition-all"
              >
                Fermer
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Error Notification Modal */}
      {errorMsg && (
        <div className="fixed inset-0 z-[1300] bg-black/70 backdrop-blur-sm flex items-center justify-center p-4" onClick={() => setErrorMsg(null)}>
          <div className="bg-surface-container border border-gray-200 dark:border-white/10 rounded-2xl max-w-sm w-full p-6 shadow-2xl space-y-4 text-center" onClick={(e) => e.stopPropagation()}>
            <div className="flex flex-col items-center">
              <span className="material-symbols-outlined text-red-400 text-6xl">error</span>
              <h3 className="text-xl font-bold mt-3 text-gray-900 dark:text-white">Erreur</h3>
              <p className="text-on-surface-variant mt-2 text-sm">{errorMsg}</p>
            </div>
            <div className="pt-2 flex justify-center">
              <button 
                onClick={() => setErrorMsg(null)}
                className="px-5 py-2 bg-red-500/20 text-red-400 hover:bg-red-500/30 rounded-xl font-semibold text-sm cursor-pointer transition-all"
              >
                Fermer
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
