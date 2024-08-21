<template>
  <div class="w-full relative bg-lavender-100 overflow-hidden flex flex-col items-center justify-start pt-[25px] px-5 pb-0 box-border gap-[19px] leading-[normal] tracking-[normal] text-center text-[22px] text-white font-dm-sans">
    <div class="w-[22px] h-0 relative font-medium hidden mq450:text-lg">
      
    </div>
    <header class="w-[1120px] rounded-3xs bg-snow flex flex-row items-start justify-between pt-[5px] pb-1.5 pr-[102px] pl-[42px] box-border mix-blend-normal top-[0] z-[99] sticky gap-[20px] max-w-full text-left text-xs text-darkslateblue-100 font-dm-sans mq750:pr-[25px] mq750:box-border mq1125:pl-[21px] mq1125:pr-[51px] mq1125:box-border">
      <div class="h-[45px] w-[1120px] relative rounded-3xs bg-snow hidden max-w-full" />
      <img
        class="h-[34px] w-[170px] relative rounded object-cover mix-blend-normal z-[1]"
        loading="lazy"
        alt=""
        src="@/assets/logo2_11.jpg"
      />
      <div class="w-56 flex flex-col items-start justify-start pt-[9px] px-0 pb-0 box-border">
        <div class="self-stretch flex flex-row items-start justify-between gap-[20px]">
          <div class="relative inline-block min-w-[35px] z-[1]">HOME</div>
          <div class="relative whitespace-pre-wrap inline-block min-w-[76px] shrink-0 z-[1]">CONTACT US</div>
          <div class="relative inline-block min-w-[49px] z-[1]">LOGOUT</div>
        </div>
      </div>
    </header>
    <main class="w-[1120px] flex flex-row items-start justify-start max-w-full text-left text-base text-white font-dm-sans">
      <div class="w-[272px] flex flex-col items-start justify-start pt-[265px] pb-[52px] pr-0 pl-[13px] box-border relative gap-[121px] mq450:gap-[60px] mq750:hidden mq750:pt-28 mq750:pb-[22px] mq750:box-border mq1025:pt-[172px] mq1025:pb-[34px] mq1025:box-border">
        <div class="self-stretch flex flex-row items-start justify-end">
          <div class="w-[196px] flex flex-col items-start justify-start gap-[21px]">
            <div class="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-[30px]">
              <div class="flex-1 relative z-[1]">unverified</div>
            </div>
            <div class="w-[151px] flex flex-col items-start justify-start gap-[11px]">
              <div class="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-[15px]">
                <div class="flex-1 relative z-[1]">First Name</div>
              </div>
              <div class="flex flex-row items-start justify-start py-0 px-[15px]">
                <div class="relative inline-block min-w-[83px] z-[1]">Last name</div>
              </div>
              <div class="relative inline-block min-w-[113px] z-[1]">Job -Category</div>
            </div>
          </div>
        </div>
        <div class="flex flex-row items-start justify-start pt-0 px-0 pb-[156px]">
          <button class="cursor-pointer [border:none] py-[13px] px-[51px] bg-darkslateblue-200 shadow-[-1px_0px_0px_#313d4f_inset] rounded-4xs overflow-hidden flex flex-row items-start justify-start whitespace-nowrap z-[1] hover:bg-cornflowerblue-300">
            <b class="relative text-base tracking-[0.3px] inline-block font-dm-sans text-white text-left min-w-[110px]">Make an offer</b>
          </button>
        </div>
        <div class="w-[265px] h-full absolute !m-[0] top-[0px] bottom-[0px] left-[0px]">
          <div class="absolute top-[0px] left-[0px] rounded-4xs bg-lightsteelblue w-full h-full" />
          <img
            class="absolute top-[25px] left-[25px] rounded-[50%] w-[216px] h-[223px] object-contain z-[1]"
            loading="lazy"
            alt=""
            src="@/assets/profile-pic.jpg"
          />
          <img
            class="absolute top-[260px] left-[60px] w-[31px] h-[34px] object-contain z-[1]"
            loading="lazy"
            alt=""
            src="@/assets/unverifed-shield-1@2x.jpg"
          />
        </div>
        <button class="cursor-pointer [border:none] py-[13px] px-[61px] bg-darkslateblue-200 shadow-[-1px_0px_0px_#313d4f_inset] rounded-4xs overflow-hidden flex flex-row items-start justify-start whitespace-nowrap z-[1] hover:bg-cornflowerblue-300">
          <div class="relative text-base tracking-[0.3px] font-dm-sans text-white text-left inline-block min-w-[112px]">Back to profile</div>
        </button>
      </div>
      <section class="flex-1 flex flex-col items-start justify-start pt-[47px] px-0 pb-0 box-border max-w-[calc(100%_-_272px)] mq450:pt-5 mq450:box-border mq750:max-w-full mq1025:pt-[31px] mq1025:box-border">
        <footer class="self-stretch flex flex-col items-start justify-start gap-[87px] max-w-full text-left text-lg text-darkslateblue-100 font-dm-sans mq450:gap-[22px] mq1025:gap-[43px]">
          <div class="self-stretch rounded-4xs bg-white flex flex-col items-start justify-start pt-[39px] pb-7 pr-0 pl-[13px] box-border gap-[46px] max-w-full mq450:gap-[23px] mq750:pt-[25px] mq750:pb-5 mq750:box-border">
            <div class="self-stretch h-[732px] relative rounded-4xs bg-white hidden" />
            <div class="self-stretch flex flex-col items-start justify-start gap-[39px] max-w-full mq450:gap-[19px]">
              <div class="self-stretch flex flex-row items-start justify-start gap-[20px] max-w-full mq750:flex-wrap">
                <div class="flex-1 flex flex-col items-end justify-start gap-[61px] min-w-[357px] max-w-full mq450:gap-[15px] mq450:min-w-full mq750:gap-[30px]">
                  <div class="self-stretch flex flex-row items-start justify-start gap-[20px] mq750:flex-wrap">
                    <div class="flex-[0.6203] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.47)] rounded-xl bg-whitesmoke-100 flex flex-col items-start justify-start pt-8 px-9 pb-[17px] box-border gap-[8px] min-w-[127px] z-[1] mq450:flex-1">
                      <div class="w-[170px] h-[101px] relative shadow-[0px_4px_4px_rgba(0,_0,_0,_0.47)] rounded-xl bg-whitesmoke-100 hidden" />
                      <div class="relative inline-block min-w-[89px] z-[1]">Availability</div>
                      <div class="flex flex-row items-start justify-start py-0 pr-5 pl-[11px] text-base text-black">
                        <div class="relative inline-block min-w-[67px] z-[1]">Full-time</div>
                      </div>
                    </div>
                    <div class="flex-[0.7722] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.47)] rounded-xl bg-whitesmoke-100 flex flex-col items-start justify-start pt-8 px-9 pb-[17px] box-border gap-[8px] min-w-[129px] z-[1] mq450:flex-1">
                      <div class="w-[170px] h-[101px] relative shadow-[0px_4px_4px_rgba(0,_0,_0,_0.47)] rounded-xl bg-whitesmoke-100 hidden" />
                      <div class="relative inline-block min-w-[89px] z-[1]">Job Type</div>
                      <div class="flex flex-row items-start justify-start py-0 pr-5 pl-[11px] text-base text-black">
                        <div class="relative inline-block min-w-[67px] z-[1]">Developer</div>
                      </div>
                    </div>
                  </div>
                  <div class="self-stretch flex flex-row items-start justify-start gap-[20px] max-w-full">
                    <div class="relative text-base tracking-[0.3px] font-dm-sans text-darkslateblue-100 text-left min-w-[144px]">
                      <b>Location</b>
                    </div>
                    <div class="relative text-base tracking-[0.3px] font-dm-sans text-darkslateblue-100 text-left min-w-[144px]">
                      <b>Salary</b>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </section>
    </main>
  </div>
</template>

<script setup>
// Define any required data, computed properties, or methods here
</script>

<style scoped>
/* Add component-specific styles here */
</style>
