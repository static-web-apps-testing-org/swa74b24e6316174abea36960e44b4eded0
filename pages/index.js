import React, { useEffect } from 'react';

function HomePage() {
	useEffect(() => {
    document.title = 'SWA Next.js';
  });
   return (
      <>
		<div>
			
		</div>
         <div style={{ fontSize: "120px", margin: "20px", textAlign: "center" }}>Welcome to Next.js!</div>
		 <div style={{ padding: "10px 20px", fontSize: "50px", margin: "5%", textAlign: "center", color: "white"}}>
			<a href="/feature/ssr">SSR Demo</a><br></br><br></br>
			<a href="/feature/isr">ISR Demo with revalidate time of 10s.</a>
		 </div>
      </>	    
   )
}

export default HomePage

// SIG // Begin signature block
// SIG // MIIrdwYJKoZIhvcNAQcCoIIraDCCK2QCAQExDzANBglg
// SIG // hkgBZQMEAgEFADB3BgorBgEEAYI3AgEEoGkwZzAyBgor
// SIG // BgEEAYI3AgEeMCQCAQEEEBDgyQbOONQRoqMAEEvTUJAC
// SIG // AQACAQACAQACAQACAQAwMTANBglghkgBZQMEAgEFAAQg
// SIG // Mrs5ycu2OvQVELNzMLiCdfiH7Z96r+O+L/UrxJlAkbeg
// SIG // ghFuMIIIfjCCB2agAwIBAgITNgAAAchkggAwtCOCeAAC
// SIG // AAAByDANBgkqhkiG9w0BAQsFADBBMRMwEQYKCZImiZPy
// SIG // LGQBGRYDR0JMMRMwEQYKCZImiZPyLGQBGRYDQU1FMRUw
// SIG // EwYDVQQDEwxBTUUgQ1MgQ0EgMDEwHhcNMjMwMzIwMjAw
// SIG // MDMxWhcNMjQwMzE5MjAwMDMxWjAkMSIwIAYDVQQDExlN
// SIG // aWNyb3NvZnQgQXp1cmUgQ29kZSBTaWduMIIBIjANBgkq
// SIG // hkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEArKhH7cINkFWa
// SIG // NPbW4CGpQwfhD2vWIwm5iDQIGjc5Siq9Ay9yIB0MPvck
// SIG // Xnp402u+fVvy8Zb+cPXCyiemnyFG7wYwKgPF4+x2awd4
// SIG // beHkFvcWtTV+Yz5oEKVVT0oWR5NfsUHuqEGDlIVFAYB/
// SIG // 7FIlZQWRiC4emeka+jYoFTl50U2mDQ/CvdCquvAd+dBc
// SIG // hoH0BLXWh00rK3NqRoqQj50vTHl+EB5HCer6+uP7iFKi
// SIG // a3vFw1uDonKVKmcz4x8GJo4y5p7plcr4VAB5FdwTpZrz
// SIG // hFObBzJxcxdIT3qMm07RYM6K1EbUn3AKKTEG2O9etQ06
// SIG // oIKCcGHltvj0NZp37NkEJwIDAQABo4IFijCCBYYwKQYJ
// SIG // KwYBBAGCNxUKBBwwGjAMBgorBgEEAYI3WwEBMAoGCCsG
// SIG // AQUFBwMDMD0GCSsGAQQBgjcVBwQwMC4GJisGAQQBgjcV
// SIG // CIaQ4w2E1bR4hPGLPoWb3RbOnRKBYIPdzWaGlIwyAgFk
// SIG // AgEMMIICdgYIKwYBBQUHAQEEggJoMIICZDBiBggrBgEF
// SIG // BQcwAoZWaHR0cDovL2NybC5taWNyb3NvZnQuY29tL3Br
// SIG // aWluZnJhL0NlcnRzL0JZMlBLSUNTQ0EwMS5BTUUuR0JM
// SIG // X0FNRSUyMENTJTIwQ0ElMjAwMSgyKS5jcnQwUgYIKwYB
// SIG // BQUHMAKGRmh0dHA6Ly9jcmwxLmFtZS5nYmwvYWlhL0JZ
// SIG // MlBLSUNTQ0EwMS5BTUUuR0JMX0FNRSUyMENTJTIwQ0El
// SIG // MjAwMSgyKS5jcnQwUgYIKwYBBQUHMAKGRmh0dHA6Ly9j
// SIG // cmwyLmFtZS5nYmwvYWlhL0JZMlBLSUNTQ0EwMS5BTUUu
// SIG // R0JMX0FNRSUyMENTJTIwQ0ElMjAwMSgyKS5jcnQwUgYI
// SIG // KwYBBQUHMAKGRmh0dHA6Ly9jcmwzLmFtZS5nYmwvYWlh
// SIG // L0JZMlBLSUNTQ0EwMS5BTUUuR0JMX0FNRSUyMENTJTIw
// SIG // Q0ElMjAwMSgyKS5jcnQwUgYIKwYBBQUHMAKGRmh0dHA6
// SIG // Ly9jcmw0LmFtZS5nYmwvYWlhL0JZMlBLSUNTQ0EwMS5B
// SIG // TUUuR0JMX0FNRSUyMENTJTIwQ0ElMjAwMSgyKS5jcnQw
// SIG // ga0GCCsGAQUFBzAChoGgbGRhcDovLy9DTj1BTUUlMjBD
// SIG // UyUyMENBJTIwMDEsQ049QUlBLENOPVB1YmxpYyUyMEtl
// SIG // eSUyMFNlcnZpY2VzLENOPVNlcnZpY2VzLENOPUNvbmZp
// SIG // Z3VyYXRpb24sREM9QU1FLERDPUdCTD9jQUNlcnRpZmlj
// SIG // YXRlP2Jhc2U/b2JqZWN0Q2xhc3M9Y2VydGlmaWNhdGlv
// SIG // bkF1dGhvcml0eTAdBgNVHQ4EFgQUskGhjtP5WCMqHOBI
// SIG // YEqYPR0vFkMwDgYDVR0PAQH/BAQDAgeAMEUGA1UdEQQ+
// SIG // MDykOjA4MR4wHAYDVQQLExVNaWNyb3NvZnQgQ29ycG9y
// SIG // YXRpb24xFjAUBgNVBAUTDTIzNjE2Nys1MDAzNjAwggHm
// SIG // BgNVHR8EggHdMIIB2TCCAdWgggHRoIIBzYY/aHR0cDov
// SIG // L2NybC5taWNyb3NvZnQuY29tL3BraWluZnJhL0NSTC9B
// SIG // TUUlMjBDUyUyMENBJTIwMDEoMikuY3JshjFodHRwOi8v
// SIG // Y3JsMS5hbWUuZ2JsL2NybC9BTUUlMjBDUyUyMENBJTIw
// SIG // MDEoMikuY3JshjFodHRwOi8vY3JsMi5hbWUuZ2JsL2Ny
// SIG // bC9BTUUlMjBDUyUyMENBJTIwMDEoMikuY3JshjFodHRw
// SIG // Oi8vY3JsMy5hbWUuZ2JsL2NybC9BTUUlMjBDUyUyMENB
// SIG // JTIwMDEoMikuY3JshjFodHRwOi8vY3JsNC5hbWUuZ2Js
// SIG // L2NybC9BTUUlMjBDUyUyMENBJTIwMDEoMikuY3JshoG9
// SIG // bGRhcDovLy9DTj1BTUUlMjBDUyUyMENBJTIwMDEoMiks
// SIG // Q049QlkyUEtJQ1NDQTAxLENOPUNEUCxDTj1QdWJsaWMl
// SIG // MjBLZXklMjBTZXJ2aWNlcyxDTj1TZXJ2aWNlcyxDTj1D
// SIG // b25maWd1cmF0aW9uLERDPUFNRSxEQz1HQkw/Y2VydGlm
// SIG // aWNhdGVSZXZvY2F0aW9uTGlzdD9iYXNlP29iamVjdENs
// SIG // YXNzPWNSTERpc3RyaWJ1dGlvblBvaW50MB8GA1UdIwQY
// SIG // MBaAFJZRhOBrb3v+2Aarw/KF5imuavnUMB8GA1UdJQQY
// SIG // MBYGCisGAQQBgjdbAQEGCCsGAQUFBwMDMA0GCSqGSIb3
// SIG // DQEBCwUAA4IBAQDG1533NPfZ4bL0nuae9PWCGH0ZmNci
// SIG // CejMn71r/igTKxx635KmcI38lYY/vhbu++jhMlN3V3Ke
// SIG // AJEmuUdbTxtaXlhhJwWW/3i4GfQGjFIot6N3F9OuXURf
// SIG // 8jc4LypadrWJV1l1bmZ/G75FiqMoEDF7DYjyYJ9BNUU3
// SIG // alOgYyXygBJJjSfJR/8Vgd8hYCExm9DJgXDlSuKZ7ZeD
// SIG // ailP2EGIO5+m0QGI1tyMKdc/YgPrJUw7NI9wmx8ET/J5
// SIG // fxrrh21fdowYoGCYnphYtGhGBvnqDdaHXbVECC3gzbU+
// SIG // nLfeFF30rr/jHxoXWzKfFcYCj5Xnw52bu5mDZB8jF/dH
// SIG // vhlPMIII6DCCBtCgAwIBAgITHwAAAFHqj/accwyoOwAA
// SIG // AAAAUTANBgkqhkiG9w0BAQsFADA8MRMwEQYKCZImiZPy
// SIG // LGQBGRYDR0JMMRMwEQYKCZImiZPyLGQBGRYDQU1FMRAw
// SIG // DgYDVQQDEwdhbWVyb290MB4XDTIxMDUyMTE4NDQxNFoX
// SIG // DTI2MDUyMTE4NTQxNFowQTETMBEGCgmSJomT8ixkARkW
// SIG // A0dCTDETMBEGCgmSJomT8ixkARkWA0FNRTEVMBMGA1UE
// SIG // AxMMQU1FIENTIENBIDAxMIIBIjANBgkqhkiG9w0BAQEF
// SIG // AAOCAQ8AMIIBCgKCAQEAyZpSCX0Bno1W1yqXMhT6BUlJ
// SIG // ZWpa4p3xFeiTHO4vm2Q6C/azR5xwxnyYHrkSGDtS2P9X
// SIG // +KDE64V20mmEQkubxnPNeOVnE2RvdPGxgwlq+BhS3ONd
// SIG // VsQPj79q7XgHM9HhzB9+qk0PC9KN1zm9p/seyiRS6JF1
// SIG // dbOqRf1pUl7FAVxmgiCFgV8hHIb/rDPXig7FDi3S0yEx
// SIG // 2CUDVpIq8jEhG8anUFE1WYxM+ni0S5KHwwKPKV4qyGDo
// SIG // DO+9AmDoma3Chyu5WDlW5cdtqXTWsGPE3umtnX6Amlld
// SIG // UFLms4OVR4guKf+n5LIBCC6bTiocfXPomqYjYTKx7AGM
// SIG // faVLaaXmhQIDAQABo4IE3DCCBNgwEgYJKwYBBAGCNxUB
// SIG // BAUCAwIAAjAjBgkrBgEEAYI3FQIEFgQUEmgkQiFHy9Rr
// SIG // vjHPIKTACyN/P0cwHQYDVR0OBBYEFJZRhOBrb3v+2Aar
// SIG // w/KF5imuavnUMIIBBAYDVR0lBIH8MIH5BgcrBgEFAgMF
// SIG // BggrBgEFBQcDAQYIKwYBBQUHAwIGCisGAQQBgjcUAgEG
// SIG // CSsGAQQBgjcVBgYKKwYBBAGCNwoDDAYJKwYBBAGCNxUG
// SIG // BggrBgEFBQcDCQYIKwYBBQUIAgIGCisGAQQBgjdAAQEG
// SIG // CysGAQQBgjcKAwQBBgorBgEEAYI3CgMEBgkrBgEEAYI3
// SIG // FQUGCisGAQQBgjcUAgIGCisGAQQBgjcUAgMGCCsGAQUF
// SIG // BwMDBgorBgEEAYI3WwEBBgorBgEEAYI3WwIBBgorBgEE
// SIG // AYI3WwMBBgorBgEEAYI3WwUBBgorBgEEAYI3WwQBBgor
// SIG // BgEEAYI3WwQCMBkGCSsGAQQBgjcUAgQMHgoAUwB1AGIA
// SIG // QwBBMAsGA1UdDwQEAwIBhjASBgNVHRMBAf8ECDAGAQH/
// SIG // AgEAMB8GA1UdIwQYMBaAFCleUV5krjS566ycDaeMdQHR
// SIG // CQsoMIIBaAYDVR0fBIIBXzCCAVswggFXoIIBU6CCAU+G
// SIG // MWh0dHA6Ly9jcmwubWljcm9zb2Z0LmNvbS9wa2lpbmZy
// SIG // YS9jcmwvYW1lcm9vdC5jcmyGI2h0dHA6Ly9jcmwyLmFt
// SIG // ZS5nYmwvY3JsL2FtZXJvb3QuY3JshiNodHRwOi8vY3Js
// SIG // My5hbWUuZ2JsL2NybC9hbWVyb290LmNybIYjaHR0cDov
// SIG // L2NybDEuYW1lLmdibC9jcmwvYW1lcm9vdC5jcmyGgaps
// SIG // ZGFwOi8vL0NOPWFtZXJvb3QsQ049QU1FUm9vdCxDTj1D
// SIG // RFAsQ049UHVibGljJTIwS2V5JTIwU2VydmljZXMsQ049
// SIG // U2VydmljZXMsQ049Q29uZmlndXJhdGlvbixEQz1BTUUs
// SIG // REM9R0JMP2NlcnRpZmljYXRlUmV2b2NhdGlvbkxpc3Q/
// SIG // YmFzZT9vYmplY3RDbGFzcz1jUkxEaXN0cmlidXRpb25Q
// SIG // b2ludDCCAasGCCsGAQUFBwEBBIIBnTCCAZkwRwYIKwYB
// SIG // BQUHMAKGO2h0dHA6Ly9jcmwubWljcm9zb2Z0LmNvbS9w
// SIG // a2lpbmZyYS9jZXJ0cy9BTUVSb290X2FtZXJvb3QuY3J0
// SIG // MDcGCCsGAQUFBzAChitodHRwOi8vY3JsMi5hbWUuZ2Js
// SIG // L2FpYS9BTUVSb290X2FtZXJvb3QuY3J0MDcGCCsGAQUF
// SIG // BzAChitodHRwOi8vY3JsMy5hbWUuZ2JsL2FpYS9BTUVS
// SIG // b290X2FtZXJvb3QuY3J0MDcGCCsGAQUFBzAChitodHRw
// SIG // Oi8vY3JsMS5hbWUuZ2JsL2FpYS9BTUVSb290X2FtZXJv
// SIG // b3QuY3J0MIGiBggrBgEFBQcwAoaBlWxkYXA6Ly8vQ049
// SIG // YW1lcm9vdCxDTj1BSUEsQ049UHVibGljJTIwS2V5JTIw
// SIG // U2VydmljZXMsQ049U2VydmljZXMsQ049Q29uZmlndXJh
// SIG // dGlvbixEQz1BTUUsREM9R0JMP2NBQ2VydGlmaWNhdGU/
// SIG // YmFzZT9vYmplY3RDbGFzcz1jZXJ0aWZpY2F0aW9uQXV0
// SIG // aG9yaXR5MA0GCSqGSIb3DQEBCwUAA4ICAQBQECO3Tw/o
// SIG // 317Rrd7yadqcswPx1LvIYymkaTN6KcmuRt6HKa0Xe73U
// SIG // x2/AQ30TfgA9GBJngweRykKBusRzyOU17iIubJvy3gA2
// SIG // 1dwtqtB0DsoEv1U/ptVu2v++doTCJ/i+GbssVXkgaX8H
// SIG // +6EOGEmT4evp4GbwR4HwWlc+Dvf8HH8PdUA2Z04CvcwI
// SIG // fckSipbNm84jxJ8XjmTFTWscldL9edj2NsY6iGnyJFIy
// SIG // ur2PS7VRYyV3p1VAJp91gj1jRQtWEyCB8P5g9nE3z8u0
// SIG // ANaU/hjwEQCrdGyravWgnf2JtG+bT26YAokbc8m+32zU
// SIG // tXRO+NK3tAjhOu2FdsG3qNrF4sc7y37R/C+7Pcb/cFfh
// SIG // ttqsirepZii4xStcjMODYuXzGm3IJs0b0owHG6oKd7ZO
// SIG // GvHpmmh9K8/DLriD/sq8bURD10qi/wuW8zM7IpLg1vcR
// SIG // 9dIK2mc0pj44pc6UX0XbttP/VEJgu3lT2eI9VjWtaKjx
// SIG // 38xE9woSMyekPRtzTwgfuysF9DkJisr+yA4po/FPxpbB
// SIG // w9c/hBf32DH/GFxteS2pmjgKIbMP8sDukmEq3lVvuWNJ
// SIG // sybrZwQvQpvaM49fv+JKpLK5YWYEfwksYRR9wU8Hh/ID
// SIG // 9hRCEkbUoQ2W7mMpsp2Nbp/kcn4ivfolUy3Q9Yf0scsQ
// SIG // 6WTLYpm+AoCUJTGCGWEwghldAgEBMFgwQTETMBEGCgmS
// SIG // JomT8ixkARkWA0dCTDETMBEGCgmSJomT8ixkARkWA0FN
// SIG // RTEVMBMGA1UEAxMMQU1FIENTIENBIDAxAhM2AAAByGSC
// SIG // ADC0I4J4AAIAAAHIMA0GCWCGSAFlAwQCAQUAoIGuMBkG
// SIG // CSqGSIb3DQEJAzEMBgorBgEEAYI3AgEEMBwGCisGAQQB
// SIG // gjcCAQsxDjAMBgorBgEEAYI3AgEVMC8GCSqGSIb3DQEJ
// SIG // BDEiBCDnmYSXZ0HbyYwcbQA2sHperE+1ibeBlAWY9mB2
// SIG // oU8LIjBCBgorBgEEAYI3AgEMMTQwMqAUgBIATQBpAGMA
// SIG // cgBvAHMAbwBmAHShGoAYaHR0cDovL3d3dy5taWNyb3Nv
// SIG // ZnQuY29tMA0GCSqGSIb3DQEBAQUABIIBAEzhQODvdSiY
// SIG // hWfduS/A40nh3R6vUvPo5052T8wFXHE+eGCiP/Dm8uAy
// SIG // bfoAfohRIExBvPwT1uDlI8KTMHkuvIssV8D9XdDXur7H
// SIG // Qx8LDSQFFSOZYruCPZYTq+AS7OYMLVq8Dp7BAZdAp9FB
// SIG // NgV6jxO7cLBUQSIeT/yFgz4OOMGUMSxJtmaMXJJ9ylGW
// SIG // T2dxC9L1yZEk/gvblktJXBfIfi7C1SCJl0/OyD39uF88
// SIG // KELZty69UtNjcxebYnL5FO4kJcHDQrKJ+pkTrbxrpoNO
// SIG // NKenoJtZDbqfzbyVGZ0bR4D80rHDwomFx5nBSEAbvgaK
// SIG // ch4h7KYO2yOsE2oAQbXvrPChghcpMIIXJQYKKwYBBAGC
// SIG // NwMDATGCFxUwghcRBgkqhkiG9w0BBwKgghcCMIIW/gIB
// SIG // AzEPMA0GCWCGSAFlAwQCAQUAMIIBWQYLKoZIhvcNAQkQ
// SIG // AQSgggFIBIIBRDCCAUACAQEGCisGAQQBhFkKAwEwMTAN
// SIG // BglghkgBZQMEAgEFAAQgCOeTSBUG0NLh1nnbWWDDhk2B
// SIG // v62ApjQrXx5KNGjV0NICBmW6oA6f5RgTMjAyNDAyMjEw
// SIG // MDIzNDQuMTQ3WjAEgAIB9KCB2KSB1TCB0jELMAkGA1UE
// SIG // BhMCVVMxEzARBgNVBAgTCldhc2hpbmd0b24xEDAOBgNV
// SIG // BAcTB1JlZG1vbmQxHjAcBgNVBAoTFU1pY3Jvc29mdCBD
// SIG // b3Jwb3JhdGlvbjEtMCsGA1UECxMkTWljcm9zb2Z0IEly
// SIG // ZWxhbmQgT3BlcmF0aW9ucyBMaW1pdGVkMSYwJAYDVQQL
// SIG // Ex1UaGFsZXMgVFNTIEVTTjowODQyLTRCRTYtQzI5QTEl
// SIG // MCMGA1UEAxMcTWljcm9zb2Z0IFRpbWUtU3RhbXAgU2Vy
// SIG // dmljZaCCEXgwggcnMIIFD6ADAgECAhMzAAAB2o7VyVoA
// SIG // 0RGxAAEAAAHaMA0GCSqGSIb3DQEBCwUAMHwxCzAJBgNV
// SIG // BAYTAlVTMRMwEQYDVQQIEwpXYXNoaW5ndG9uMRAwDgYD
// SIG // VQQHEwdSZWRtb25kMR4wHAYDVQQKExVNaWNyb3NvZnQg
// SIG // Q29ycG9yYXRpb24xJjAkBgNVBAMTHU1pY3Jvc29mdCBU
// SIG // aW1lLVN0YW1wIFBDQSAyMDEwMB4XDTIzMTAxMjE5MDY1
// SIG // OVoXDTI1MDExMDE5MDY1OVowgdIxCzAJBgNVBAYTAlVT
// SIG // MRMwEQYDVQQIEwpXYXNoaW5ndG9uMRAwDgYDVQQHEwdS
// SIG // ZWRtb25kMR4wHAYDVQQKExVNaWNyb3NvZnQgQ29ycG9y
// SIG // YXRpb24xLTArBgNVBAsTJE1pY3Jvc29mdCBJcmVsYW5k
// SIG // IE9wZXJhdGlvbnMgTGltaXRlZDEmMCQGA1UECxMdVGhh
// SIG // bGVzIFRTUyBFU046MDg0Mi00QkU2LUMyOUExJTAjBgNV
// SIG // BAMTHE1pY3Jvc29mdCBUaW1lLVN0YW1wIFNlcnZpY2Uw
// SIG // ggIiMA0GCSqGSIb3DQEBAQUAA4ICDwAwggIKAoICAQCT
// SIG // kAYIdrVRUdY/I0AODQ3/G3Fa10jdPNAjSj0kKO0ue7Ap
// SIG // z1NBSheO8Ni+qh7cJuBJwpRdnK7lxaf5ez6TEINuRO1/
// SIG // MQ5r8a/AQROogEgDwn603m7rwLGVnCWIcu6a4ArgX+zo
// SIG // nV6YLFtcvKelbO7A9mrqf9Lr3mMXl5SrbD4zAqZR5JNG
// SIG // 2vh4C4aNCevCnY4twzNiufcB8vca7bGCvl/Xq2wxmdpp
// SIG // l9++uWkuUO/7oA8TFYM8o/NMiZ+lC55Jw/YuJFEMVYal
// SIG // dXXPwxelAXrs37pJDHne7a81BGTEcpWu6ob8FHkJYMwk
// SIG // IaWY8/s7EIKV5T3M7xndIqq+5QAsH1RqIOaZSM3RMb7d
// SIG // UwPCZnn/NfWkysB9SFRCMGCwOrr0vJEXQOkcbzHG//7p
// SIG // TYyLhnHsspDAFxMp1ayxvVbyuK36wrBi9499C5onboPq
// SIG // MK3Ao0GoGJqxpNYQcpF4paPWAfEMsuUNSoRrh+uVd8xc
// SIG // vGtJMGygUbPFUeB7aD2MPc9Q3XCX2QTtnYc198gDIqQh
// SIG // pukpr5r2r0bF4cvNOY4gKQ8jfrNP2+6LNs/IkVhiZOjP
// SIG // brk9uPd4BVf/SSxoOWCSQiVyPssZDvzl52SbLhrdPs1i
// SIG // 3R0uFyFwRte6D7uSrBX0Ux0RJaEdnSOhsGmsSMg8kh2D
// SIG // rbyMnZWu7uJX53wo2P6ikwIDAQABo4IBSTCCAUUwHQYD
// SIG // VR0OBBYEFKF8jclRPWYTlYsxFFcITYC/D19FMB8GA1Ud
// SIG // IwQYMBaAFJ+nFV0AXmJdg/Tl0mWnG1M1GelyMF8GA1Ud
// SIG // HwRYMFYwVKBSoFCGTmh0dHA6Ly93d3cubWljcm9zb2Z0
// SIG // LmNvbS9wa2lvcHMvY3JsL01pY3Jvc29mdCUyMFRpbWUt
// SIG // U3RhbXAlMjBQQ0ElMjAyMDEwKDEpLmNybDBsBggrBgEF
// SIG // BQcBAQRgMF4wXAYIKwYBBQUHMAKGUGh0dHA6Ly93d3cu
// SIG // bWljcm9zb2Z0LmNvbS9wa2lvcHMvY2VydHMvTWljcm9z
// SIG // b2Z0JTIwVGltZS1TdGFtcCUyMFBDQSUyMDIwMTAoMSku
// SIG // Y3J0MAwGA1UdEwEB/wQCMAAwFgYDVR0lAQH/BAwwCgYI
// SIG // KwYBBQUHAwgwDgYDVR0PAQH/BAQDAgeAMA0GCSqGSIb3
// SIG // DQEBCwUAA4ICAQC5g1XU7biNIwBLeNTtjjPAlNt+0xjM
// SIG // oaxq+xcyghBWl8baKpPyDm0K4qtXGh1Ydr8rkNuJ8903
// SIG // Tgb+63LP6pz4zsZ1xS8mT3mli7DbgEVZlFYslWF412Ae
// SIG // Q8M2lmYEnGPBii+8ho8lq4e/FiVIIe6xNfuVQ+YdP+q7
// SIG // PXQUagMyPX4Wc+7KbI7fL58edFhMWwUkh+632mx3p3aX
// SIG // qm05lv0X3Gk/hhSLE/oNno+8ESiKv0IZ7KBfJqRTTx1d
// SIG // av1iv6xfwoaL5ISTA75arRE1ovexqJTkimpmQvW2IHDy
// SIG // n89vHnduVictdFbUPT+fgv9nTnw2s9UZnjm9uym3oIWt
// SIG // Enz3K4k3zkVb6jw0mt5/Te3YU2O/uPSPHr6GnfYXWfAn
// SIG // yDj37cLd8U19kYTGSQlaBZWmx3L32/OK2hTOnM+RGJPs
// SIG // dWlRIl7YCukdMZ9cIzFx39AFpUo6kZM70p0SsxbGcBJe
// SIG // +FWoZSlYSPgovUU/fuhnNMVsye80CFBRNyYosefuyi/A
// SIG // Kx3wWPVBS8+LJ26Ce0IqdyAA25FOGS9IkPI/CMa2u2km
// SIG // H06FHn5nLd3TOvX3+BHodiofTbCooqYefPQKf8UtYxEp
// SIG // a34y/4P2W6GkuXfWtnwOffJrmw7yw+ceTz9++9NL5v2P
// SIG // jyIZqdn077ktrJ3XmQZsk6nFDR0TZgpPp41d5zCCB3Ew
// SIG // ggVZoAMCAQICEzMAAAAVxedrngKbSZkAAAAAABUwDQYJ
// SIG // KoZIhvcNAQELBQAwgYgxCzAJBgNVBAYTAlVTMRMwEQYD
// SIG // VQQIEwpXYXNoaW5ndG9uMRAwDgYDVQQHEwdSZWRtb25k
// SIG // MR4wHAYDVQQKExVNaWNyb3NvZnQgQ29ycG9yYXRpb24x
// SIG // MjAwBgNVBAMTKU1pY3Jvc29mdCBSb290IENlcnRpZmlj
// SIG // YXRlIEF1dGhvcml0eSAyMDEwMB4XDTIxMDkzMDE4MjIy
// SIG // NVoXDTMwMDkzMDE4MzIyNVowfDELMAkGA1UEBhMCVVMx
// SIG // EzARBgNVBAgTCldhc2hpbmd0b24xEDAOBgNVBAcTB1Jl
// SIG // ZG1vbmQxHjAcBgNVBAoTFU1pY3Jvc29mdCBDb3Jwb3Jh
// SIG // dGlvbjEmMCQGA1UEAxMdTWljcm9zb2Z0IFRpbWUtU3Rh
// SIG // bXAgUENBIDIwMTAwggIiMA0GCSqGSIb3DQEBAQUAA4IC
// SIG // DwAwggIKAoICAQDk4aZM57RyIQt5osvXJHm9DtWC0/3u
// SIG // nAcH0qlsTnXIyjVX9gF/bErg4r25PhdgM/9cT8dm95VT
// SIG // cVrifkpa/rg2Z4VGIwy1jRPPdzLAEBjoYH1qUoNEt6aO
// SIG // RmsHFPPFdvWGUNzBRMhxXFExN6AKOG6N7dcP2CZTfDlh
// SIG // AnrEqv1yaa8dq6z2Nr41JmTamDu6GnszrYBbfowQHJ1S
// SIG // /rboYiXcag/PXfT+jlPP1uyFVk3v3byNpOORj7I5LFGc
// SIG // 6XBpDco2LXCOMcg1KL3jtIckw+DJj361VI/c+gVVmG1o
// SIG // O5pGve2krnopN6zL64NF50ZuyjLVwIYwXE8s4mKyzbni
// SIG // jYjklqwBSru+cakXW2dg3viSkR4dPf0gz3N9QZpGdc3E
// SIG // XzTdEonW/aUgfX782Z5F37ZyL9t9X4C626p+Nuw2TPYr
// SIG // bqgSUei/BQOj0XOmTTd0lBw0gg/wEPK3Rxjtp+iZfD9M
// SIG // 269ewvPV2HM9Q07BMzlMjgK8QmguEOqEUUbi0b1qGFph
// SIG // AXPKZ6Je1yh2AuIzGHLXpyDwwvoSCtdjbwzJNmSLW6Cm
// SIG // gyFdXzB0kZSU2LlQ+QuJYfM2BjUYhEfb3BvR/bLUHMVr
// SIG // 9lxSUV0S2yW6r1AFemzFER1y7435UsSFF5PAPBXbGjfH
// SIG // CBUYP3irRbb1Hode2o+eFnJpxq57t7c+auIurQIDAQAB
// SIG // o4IB3TCCAdkwEgYJKwYBBAGCNxUBBAUCAwEAATAjBgkr
// SIG // BgEEAYI3FQIEFgQUKqdS/mTEmr6CkTxGNSnPEP8vBO4w
// SIG // HQYDVR0OBBYEFJ+nFV0AXmJdg/Tl0mWnG1M1GelyMFwG
// SIG // A1UdIARVMFMwUQYMKwYBBAGCN0yDfQEBMEEwPwYIKwYB
// SIG // BQUHAgEWM2h0dHA6Ly93d3cubWljcm9zb2Z0LmNvbS9w
// SIG // a2lvcHMvRG9jcy9SZXBvc2l0b3J5Lmh0bTATBgNVHSUE
// SIG // DDAKBggrBgEFBQcDCDAZBgkrBgEEAYI3FAIEDB4KAFMA
// SIG // dQBiAEMAQTALBgNVHQ8EBAMCAYYwDwYDVR0TAQH/BAUw
// SIG // AwEB/zAfBgNVHSMEGDAWgBTV9lbLj+iiXGJo0T2UkFvX
// SIG // zpoYxDBWBgNVHR8ETzBNMEugSaBHhkVodHRwOi8vY3Js
// SIG // Lm1pY3Jvc29mdC5jb20vcGtpL2NybC9wcm9kdWN0cy9N
// SIG // aWNSb29DZXJBdXRfMjAxMC0wNi0yMy5jcmwwWgYIKwYB
// SIG // BQUHAQEETjBMMEoGCCsGAQUFBzAChj5odHRwOi8vd3d3
// SIG // Lm1pY3Jvc29mdC5jb20vcGtpL2NlcnRzL01pY1Jvb0Nl
// SIG // ckF1dF8yMDEwLTA2LTIzLmNydDANBgkqhkiG9w0BAQsF
// SIG // AAOCAgEAnVV9/Cqt4SwfZwExJFvhnnJL/Klv6lwUtj5O
// SIG // R2R4sQaTlz0xM7U518JxNj/aZGx80HU5bbsPMeTCj/ts
// SIG // 0aGUGCLu6WZnOlNN3Zi6th542DYunKmCVgADsAW+iehp
// SIG // 4LoJ7nvfam++Kctu2D9IdQHZGN5tggz1bSNU5HhTdSRX
// SIG // ud2f8449xvNo32X2pFaq95W2KFUn0CS9QKC/GbYSEhFd
// SIG // PSfgQJY4rPf5KYnDvBewVIVCs/wMnosZiefwC2qBwoEZ
// SIG // QhlSdYo2wh3DYXMuLGt7bj8sCXgU6ZGyqVvfSaN0DLzs
// SIG // kYDSPeZKPmY7T7uG+jIa2Zb0j/aRAfbOxnT99kxybxCr
// SIG // dTDFNLB62FD+CljdQDzHVG2dY3RILLFORy3BFARxv2T5
// SIG // JL5zbcqOCb2zAVdJVGTZc9d/HltEAY5aGZFrDZ+kKNxn
// SIG // GSgkujhLmm77IVRrakURR6nxt67I6IleT53S0Ex2tVdU
// SIG // CbFpAUR+fKFhbHP+CrvsQWY9af3LwUFJfn6Tvsv4O+S3
// SIG // Fb+0zj6lMVGEvL8CwYKiexcdFYmNcP7ntdAoGokLjzba
// SIG // ukz5m/8K6TT4JDVnK+ANuOaMmdbhIurwJ0I9JZTmdHRb
// SIG // atGePu1+oDEzfbzL6Xu/OHBE0ZDxyKs6ijoIYn/ZcGNT
// SIG // TY3ugm2lBRDBcQZqELQdVTNYs6FwZvKhggLUMIICPQIB
// SIG // ATCCAQChgdikgdUwgdIxCzAJBgNVBAYTAlVTMRMwEQYD
// SIG // VQQIEwpXYXNoaW5ndG9uMRAwDgYDVQQHEwdSZWRtb25k
// SIG // MR4wHAYDVQQKExVNaWNyb3NvZnQgQ29ycG9yYXRpb24x
// SIG // LTArBgNVBAsTJE1pY3Jvc29mdCBJcmVsYW5kIE9wZXJh
// SIG // dGlvbnMgTGltaXRlZDEmMCQGA1UECxMdVGhhbGVzIFRT
// SIG // UyBFU046MDg0Mi00QkU2LUMyOUExJTAjBgNVBAMTHE1p
// SIG // Y3Jvc29mdCBUaW1lLVN0YW1wIFNlcnZpY2WiIwoBATAH
// SIG // BgUrDgMCGgMVAEKiHyGJYx1GzaGNP8I4V0Z/7EgNoIGD
// SIG // MIGApH4wfDELMAkGA1UEBhMCVVMxEzARBgNVBAgTCldh
// SIG // c2hpbmd0b24xEDAOBgNVBAcTB1JlZG1vbmQxHjAcBgNV
// SIG // BAoTFU1pY3Jvc29mdCBDb3Jwb3JhdGlvbjEmMCQGA1UE
// SIG // AxMdTWljcm9zb2Z0IFRpbWUtU3RhbXAgUENBIDIwMTAw
// SIG // DQYJKoZIhvcNAQEFBQACBQDpf3mSMCIYDzIwMjQwMjIx
// SIG // MDMxODQyWhgPMjAyNDAyMjIwMzE4NDJaMHQwOgYKKwYB
// SIG // BAGEWQoEATEsMCowCgIFAOl/eZICAQAwBwIBAAICCNIw
// SIG // BwIBAAICEp4wCgIFAOmAyxICAQAwNgYKKwYBBAGEWQoE
// SIG // AjEoMCYwDAYKKwYBBAGEWQoDAqAKMAgCAQACAwehIKEK
// SIG // MAgCAQACAwGGoDANBgkqhkiG9w0BAQUFAAOBgQCKgQnz
// SIG // otjpCuyrBrlCk64vpxWIWchgGTRqwev6MN1N9Fvk+nVf
// SIG // SOXSqDNz5GGb56vfffat+h3vGoxj67B3FJ3DqeEq+NCW
// SIG // ZRzz6lkzU1B08O6qSEk86+xe4jutjB+T1CmYkEVfEhv/
// SIG // QTelf0ToptZk7dnQtLDndJWqHmhZ//ZCYjGCBA0wggQJ
// SIG // AgEBMIGTMHwxCzAJBgNVBAYTAlVTMRMwEQYDVQQIEwpX
// SIG // YXNoaW5ndG9uMRAwDgYDVQQHEwdSZWRtb25kMR4wHAYD
// SIG // VQQKExVNaWNyb3NvZnQgQ29ycG9yYXRpb24xJjAkBgNV
// SIG // BAMTHU1pY3Jvc29mdCBUaW1lLVN0YW1wIFBDQSAyMDEw
// SIG // AhMzAAAB2o7VyVoA0RGxAAEAAAHaMA0GCWCGSAFlAwQC
// SIG // AQUAoIIBSjAaBgkqhkiG9w0BCQMxDQYLKoZIhvcNAQkQ
// SIG // AQQwLwYJKoZIhvcNAQkEMSIEIFn/GdSBt/4yAKVu0aWK
// SIG // knemTYsZucB1Xb0l3cyaTDVLMIH6BgsqhkiG9w0BCRAC
// SIG // LzGB6jCB5zCB5DCBvQQgIqWjaWLA756k3veQ49QtPdNt
// SIG // COZY4m61v53SAjsYPcYwgZgwgYCkfjB8MQswCQYDVQQG
// SIG // EwJVUzETMBEGA1UECBMKV2FzaGluZ3RvbjEQMA4GA1UE
// SIG // BxMHUmVkbW9uZDEeMBwGA1UEChMVTWljcm9zb2Z0IENv
// SIG // cnBvcmF0aW9uMSYwJAYDVQQDEx1NaWNyb3NvZnQgVGlt
// SIG // ZS1TdGFtcCBQQ0EgMjAxMAITMwAAAdqO1claANERsQAB
// SIG // AAAB2jAiBCDoa169EBtxgrHrTVQ32KaYY3iiRt7OJvfY
// SIG // BlP5k2PQMzANBgkqhkiG9w0BAQsFAASCAgBgOWkqsL78
// SIG // EzGzpgXD57bH8Ufi7uI3sB1ORa7Z8dd4YCS/8wUeU3UM
// SIG // nIpXxwDtkso8N7vj9KoS/Qp3piGLLjbkpfCRjpRzYfRA
// SIG // vL/ozhObMJdNc8Skk81y4Wy6Gd0fJp7QatrIYGAAp4+c
// SIG // rC4//PzfK4Kbr5aUsPmpdlrguoMKbiwBiFKcwvb1c468
// SIG // QycV4EG1TTZKmCSkRswN6Xo0wffnTfmPGLzaqVoF8UXv
// SIG // RK0iZqqjpte3jLe4zY3Chyh//VFEUrSJdKjPhnZxosG9
// SIG // f3ghe02QrgsDkgLJC0A4q4KY7svUhPI5cJbO+5HfjtOu
// SIG // boTR7+GcX6YOGP753BgCwZgm4ddjLuoBqDiRckFH5QJT
// SIG // pDrsZQK0AC4DGBZ8qE1T7EeIZjbSppy/449GRKwZmQP6
// SIG // N2bSwv1ah9ddjCI/70JC3NYlzOLZPhY7KGdkN51or05x
// SIG // cAlljkx9MTbN+rmw7qoUgPHRSZSl2UtsvOdXEmlmC4Kf
// SIG // /BeQktQ30P1Ii+YixDpLX8MZZdQMkBGtB4OvV5cSF9P/
// SIG // rJuIRWoWQlDjjEV64LTj2oiscCbHVlEi7XmxJxCKOKTR
// SIG // JL3H9+Ev9dn+QovaePX91DatXx+LGCKXHkd5ypf+KyG0
// SIG // lZCL2hGviLefe4HB5923Hh+O4T8jVdZDD9NWs2LE5/4V
// SIG // bBWSSgUG/G3aQw==
// SIG // End signature block
