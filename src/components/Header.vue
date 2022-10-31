<template>
	<header class="topnav">
		<img src="../assets/Labdecabits_logo.svg" id="labs-logo" />
	</header>
</template>

<script>
</script>
<style>
  .topnav {
    overflow: hidden;
    background-color: #fff;
    height: 65px;
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    align-items: center;
  }
  #labs-logo {
    height: 100px;
    width: 150px;
    margin-left: 4.85vw;
    margin-top: -8px;
  }
  @media only screen and (max-width: 1200px) {
    .topnav {
      height: 60px;
    }
    #labs-logo {
      height: 60px;
			margin-left: 4vw;
			margin-top: -7px;
    }
	}
  @media only screen and (max-width: 692px) {
    .topnav {
      height: 55px;
    }
    #labs-logo {
			margin-top: -6px;
    }
	}
  @media only screen and (max-width: 540px) {
    .topnav {
      height: 40px;
    }
    #labs-logo {
      height: 45px;
			margin-left: 0;
			margin-top: -5px;
    }
	}
  @media only screen and (max-width: 415px) {
    #labs-logo {
      height: 45px;
			margin-left: -2vw;
			margin-top: -5px;
    }
	}
</style>
