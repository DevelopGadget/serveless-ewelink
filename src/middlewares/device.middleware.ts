class Device {
    private static instance: Device;

    public static getInstance(): Device {
        if (!Device.instance) {
            Device.instance = new Device();
        }
        return Device.instance;
    }

}

export default Device.getInstance();