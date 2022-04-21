import javafx.application.Application;
import javafx.geometry.Insets;
import javafx.scene.Scene;
import javafx.scene.control.Button;
import javafx.scene.control.Label;
import javafx.scene.layout.VBox;
import javafx.stage.Stage;



public class LabelChange extends Application {

    public static void main(String[] args) {
        launch(args);
    }

    Button btn;
    Label label;
    VBox vb;
    Scene scene;

    @Override
    public void start(Stage primaryStage) {

        // Button Configuration
        btn = new Button();
        btn.setText("Change");
        btn.setOnAction(e -> btnClick());

        // Label Configuration
        label = new Label("This is Programming Class");

        // VBox configuration
        vb = new VBox();
        vb.getChildren().addAll(label, btn);
//        VBox.setMargin(new Insets());
        vb.setSpacing(20);

        scene = new Scene(vb, 300, 400);

        primaryStage.setScene(scene);
        primaryStage.show();








    }

    private void btnClick() {
        if (label.getText().equals("This is Programming Class")) {
            label.setText("This is FordSoft!");
        }
        else {
            label.setText("This is Programming Class");
        }
    }
}
