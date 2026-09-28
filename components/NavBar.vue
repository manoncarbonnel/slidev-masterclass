<!--
  Réplique de la barre de navigation de Slidev, avec un bouton mis en avant.

  <NavBar highlight="overview" />
-->

<script setup lang="ts">
defineProps({
  highlight: {
    type: String,
    default: '',
  },
})

// Même ordre que la barre de Slidev 53 (mode lecture, en local).
// Un séparateur est inséré avant chaque bouton marqué `group`.
const buttons = [
  { id: 'fullscreen', icon: 'i-carbon:maximize', label: 'Plein écran' },
  { id: 'prev', icon: 'i-carbon:arrow-left', label: 'Précédent' },
  { id: 'next', icon: 'i-carbon:arrow-right', label: 'Suivant' },
  { id: 'overview', icon: 'i-carbon:apps', label: 'Vue d\'ensemble' },
  { id: 'dark', icon: 'i-carbon:sun', label: 'Mode sombre' },
  { id: 'camera', icon: 'i-carbon:user-avatar', label: 'Caméra', group: true },
  { id: 'record', icon: 'i-carbon:video', label: 'Enregistrer' },
  { id: 'draw', icon: 'i-carbon:pen', label: 'Dessin', group: true },
  { id: 'presenter', icon: 'i-carbon:user-speaker', label: 'Présentateur·ice', group: true },
  { id: 'editor', icon: 'i-carbon:text-annotation-toggle', label: 'Éditeur' },
  { id: 'export', icon: 'i-carbon:document-pdf', label: 'Export' },
  { id: 'info', icon: 'i-carbon:information', label: 'Infos' },
  { id: 'sync', icon: 'i-ph:arrows-down-up-bold', label: 'Synchro', group: true },
  { id: 'settings', icon: 'i-carbon:settings-adjust', label: 'Réglages' },
]
</script>

<template>
  <nav class="navbar-demo" aria-label="Réplique de la barre de navigation">
    <template v-for="button in buttons" :key="button.id">
      <span v-if="button.group" class="navbar-demo__divider" />
      <span
        class="navbar-demo__button"
        :class="{ 'navbar-demo__button--active': button.id === highlight }"
        :title="button.label"
      >
        <span :class="button.icon" aria-hidden="true" />
        <span v-if="button.id === highlight" class="navbar-demo__label">{{ button.label }}</span>
      </span>
    </template>
    <span class="navbar-demo__divider" />
    <span class="navbar-demo__counter">12 / 40</span>
  </nav>
</template>

<style>
.navbar-demo {
  align-items: center;
  background-color: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: 0.5rem;
  color: var(--color-text);
  display: inline-flex;
  font-size: 1.1rem;
  gap: 0.15rem;
  padding: 0.35rem;
}

.navbar-demo__button {
  align-items: center;
  border-radius: 0.35rem;
  display: inline-flex;
  gap: 0.4rem;
  padding: 0.35rem;
}

.navbar-demo__button--active {
  background-color: var(--color-accent-fresh);
  color: var(--color-on-accent);
  font-weight: 700;
  outline: 2px solid var(--color-border);
  padding: 0.35rem 0.6rem;
}

.navbar-demo__label {
  font-size: 0.8rem;
}

.navbar-demo__divider {
  align-self: stretch;
  border-left: 1px solid var(--color-border);
  margin: 0.2rem 0.3rem;
}

.navbar-demo__counter {
  font-size: 0.85rem;
  padding: 0 0.4rem;
}
</style>
