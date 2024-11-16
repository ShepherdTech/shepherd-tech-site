<script>
  // Define the diamond dimensions
  let diamondSize = 18;
  let gap = 10;

  // Calculate number of diamonds based on window width
  let numDiamonds = 0;
  let containerWidth = 0;

  // Update number of diamonds on window resize
  $: {
    if (typeof window !== 'undefined') {
      containerWidth = window.innerWidth;
      numDiamonds = Math.ceil(containerWidth / (diamondSize + gap));
    }
  }
</script>

<div class="row-container ml-3 mr-3">
  {#each Array(numDiamonds) as _, i}
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      class="diamond"
    >
      <rect
        x="0.178955"
        y="8.78503"
        width="12.4239"
        height="12.4239"
        transform="rotate(-45 0.178955 8.78503)"
        fill="#142819"
      />
    </svg>
  {/each}
</div>

<style>
  .row-container {
    display: flex;
    flex-wrap: nowrap;
    gap: var(--gap, 10px);
    justify-content: center;
    width: 100%;
    padding: 4px;
    box-sizing: border-box;
    overflow-x: hidden;
  }

  .diamond {
    flex-shrink: 0;
    transition: transform 0.3s ease;
  }

  .diamond:hover {
    transform: scale(1.1);
  }
  @media (max-width: 768px) {
    .row-container {
      display: none;
    }
  }
</style>
