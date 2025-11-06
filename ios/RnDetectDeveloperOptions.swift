import Foundation

@objc(RnDetectDeveloperOptions)
class RnDetectDeveloperOptions: NSObject {

  @objc
  func isDeveloperOptionsEnabled(_ resolve: RCTPromiseResolveBlock, rejecter reject: RCTPromiseRejectBlock) {
    #if targetEnvironment(simulator)
        resolve(true)
    #else
        resolve(false) // No direct detection on physical device
    #endif
  }

  @objc
  static func requiresMainQueueSetup() -> Bool {
    return true
  }
}
