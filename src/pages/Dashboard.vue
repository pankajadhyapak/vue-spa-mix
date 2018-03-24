<template>
    <div class="container-fluid">
    <div class="row">
        <div class="col-md-2">
            <ul class="list-unstyled side-bar-nav">
                <li class="nav-main">
                    <router-link class="nav-link" to="/about"><i class="fa fa-bookmark"></i>&nbsp;Mentor Management</router-link>
                    <ul class="list-unstyled side-bar-sub-nav">
                        <li class="nav-sub">
                            <router-link class="nav-link" to="/about">Create Mentor</router-link>
                        </li>
                        <li class="nav-sub">
                            <router-link class="nav-link" to="/about">Delete Mentor</router-link>
                        </li>
                        <li class="nav-sub">
                            <router-link class="nav-link" to="/about">Create Mentor</router-link>
                        </li>
                    </ul>
                </li>
                <li class="nav-main">
                    <router-link class="nav-link" to="/about"><i class="fa fa-users"></i>&nbsp;Student Management</router-link>
                </li>
                <li class="nav-main">
                    <router-link class="nav-link" to="/about"><i class="fa fa-cube"></i>&nbsp;Course Management</router-link>
                </li>
                <li class="nav-main">
                    <router-link class="nav-link" to="/about"><i class="fa fa-money"></i>&nbsp;Coupon Management</router-link>
                </li>
                <li class="nav-main">
                    <router-link class="nav-link" to="/about"><i class="fa fa-cog"></i>&nbsp;Referral Management</router-link>
                </li>
                <li class="nav-main">
                    <router-link class="nav-link" to="/about"><i class="fa fa-star"></i>&nbsp;Review Management</router-link>
                </li>
                <li class="nav-main">
                    <router-link class="nav-link" to="/about"><i class="fa fa-life-ring"></i>&nbsp;Session Tracking</router-link>
                </li>
            </ul>
        </div>
        <div class="col-md-10">
            <div class="card card-default table-card">
                <div class="card-header">
                    <div class="flex space-between">
                        <div>
                            <button class="btn btn-filter">
                                <i class="fa fa-filter" aria-hidden="true"></i>
                                &nbsp;Filter
                            </button>
                        </div>
                        <div>
                            <vselect label="countryName" :options="options"></vselect>
                        </div>
                        <!--<div>-->
                            <!--<input type="text" class="form-control filter-search" placeholder="search batches..">-->
                        <!--</div>-->
                        <div>
                            <button class="btn btn-filter">
                                <i class="fa fa-cloud-download" aria-hidden="true"></i>
                                &nbsp;Export
                            </button>
                        </div>
                    </div>
                </div>
                <div class="card-body">
                <table class="table table-hover">
                    <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">First</th>
                        <th scope="col">Last</th>
                        <th scope="col">Handle</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                    </tr>
                    <tr>
                        <th scope="row">3</th>
                        <td colspan="2">Larry the Bird</td>
                        <td>@twitter</td>
                    </tr>
                    </tbody>
                </table>
                    <div class="bottom-table  mb-3">
                        <strong class="ml-2">3 Results</strong>
                        <div class="pagination-table float-right">
                            <button class="btn btn-filter mr-3">
                                Next
                            </button>
                            <button class="btn btn-filter  mr-3">
                                Previous
                            </button>
                        </div>
                    </div>


            </div></div>
        </div>
    </div>
    </div>
</template>

<script>
    export default {
        metaInfo: {
            title: 'Dashboard',
        },
        mounted() {
            console.log('Component mounted.')
        },
        data(){
            return {
                options: [
                    { countryCode: "AU", countryName: "Australia" },
                    { countryCode: "CA", countryName: "Canada" },
                    { countryCode: "CN", countryName: "China" },
                    { countryCode: "DE", countryName: "Germany" },
                    { countryCode: "JP", countryName: "Japan" },
                    { countryCode: "MX", countryName: "Mexico" },
                    { countryCode: "CH", countryName: "Switzerland" },
                    { countryCode: "US", countryName: "United States" }
                ]
            }
        }
    }
</script>