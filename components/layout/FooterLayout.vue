<template>
    <div class="footer-layout">
        <div class="footer-layout__copyright">
            2024 All Rights Reserved. EduMastery.
        </div>
        <div class="footer-layout__street">
            Juniper Bay Drive 132, Los Gangeles
        </div>
    </div>
</template>

<script setup lang="ts">

</script>

<style lang="scss">
    .footer-layout {
        background: var(--bg-color-dark);
        padding: 80px 135px;
        display: flex;
        justify-content: space-between;
        font-weight: 400;
        font-size: 12px;
        line-height: 167%;
        color: #a3a3a3;
    }

@media (max-width: 768px){
    .footer-layout {
        padding: 80px 39px 80px 39px;
    }
}

@media (max-width: 576px){
    .footer-layout {
        text-align: center;
        flex-direction: column;
        gap: 15px;
        justify-content: center;
    }
}
</style>
