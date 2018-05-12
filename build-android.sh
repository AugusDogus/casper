cd -- "$(dirname "$0")"

rm -rf ./platforms/android/app/build/outputs/apk/release/Casper.apk

ionic cordova build android --prod --release && jarsigner -verbose -sigalg SHA1withRSA -digestalg SHA1 -keystore casper.jks -storepass 4ugusD0gus ./platforms/android/app/build/outputs/apk/release/app-release-unsigned.apk casper && zipalign -v 4 ./platforms/android/app/build/outputs/apk/release/app-release-unsigned.apk ./platforms/android/app/build/outputs/apk/release/Casper.apk && ~/Library/Android/sdk/build-tools/25.0.2/apksigner verify ./platforms/android/app/build/outputs/apk/release/Casper.apk
